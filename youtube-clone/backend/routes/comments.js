const express = require('express');
const Comment = require('../models/Comment');
const Video = require('../models/Video');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Auth middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get comments for a video
router.get('/video/:videoId', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const sortBy = req.query.sortBy || 'createdAt'; // 'createdAt' or 'likes'

    let sortOption = {};
    if (sortBy === 'likes') {
      // We'll sort by number of likes (more complex aggregation needed)
      sortOption = { createdAt: -1 }; // Fallback to date for now
    } else {
      sortOption = { createdAt: -1 };
    }

    const comments = await Comment.find({
      video: req.params.videoId,
      parentComment: null // Only top-level comments
    })
      .populate('author', 'username avatar')
      .populate({
        path: 'replies',
        populate: {
          path: 'author',
          select: 'username avatar'
        }
      })
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Comment.countDocuments({
      video: req.params.videoId,
      parentComment: null
    });

    res.json({
      comments,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create a new comment
router.post('/', auth, async (req, res) => {
  try {
    const { text, videoId, parentCommentId } = req.body;

    // Validate video exists
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if comments are allowed on this video
    if (!video.allowComments) {
      return res.status(403).json({ message: 'Comments are disabled for this video' });
    }

    // If it's a reply, validate parent comment exists
    let parentComment = null;
    if (parentCommentId) {
      parentComment = await Comment.findById(parentCommentId);
      if (!parentComment) {
        return res.status(404).json({ message: 'Parent comment not found' });
      }
    }

    // Create new comment
    const comment = new Comment({
      text,
      author: req.user._id,
      video: videoId,
      parentComment: parentCommentId || null
    });

    await comment.save();

    // Add comment to video's comments array
    video.comments.push(comment._id);
    await video.save();

    // If it's a reply, add to parent comment's replies
    if (parentComment) {
      parentComment.replies.push(comment._id);
      await parentComment.save();
    }

    // Populate author info for response
    await comment.populate('author', 'username avatar');

    res.status(201).json({
      message: 'Comment created successfully',
      comment
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a comment
router.put('/:id', auth, async (req, res) => {
  try {
    const { text } = req.body;
    
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user owns the comment
    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this comment' });
    }

    comment.text = text;
    comment.isEdited = true;
    comment.editedAt = new Date();

    await comment.save();
    await comment.populate('author', 'username avatar');

    res.json({
      message: 'Comment updated successfully',
      comment
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a comment
router.delete('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if user owns the comment or owns the video
    const video = await Video.findById(comment.video);
    const isCommentOwner = comment.author.toString() === req.user._id.toString();
    const isVideoOwner = video.uploader.toString() === req.user._id.toString();

    if (!isCommentOwner && !isVideoOwner) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    // Remove from video's comments array
    video.comments.pull(comment._id);
    await video.save();

    // If it's a reply, remove from parent's replies array
    if (comment.parentComment) {
      const parentComment = await Comment.findById(comment.parentComment);
      if (parentComment) {
        parentComment.replies.pull(comment._id);
        await parentComment.save();
      }
    }

    // Delete all replies to this comment
    await Comment.deleteMany({ parentComment: comment._id });

    // Delete the comment
    await Comment.findByIdAndDelete(req.params.id);

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Like/Unlike a comment
router.post('/:id/like', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const existingLike = comment.likes.find(
      like => like.user.toString() === req.user._id.toString()
    );

    const existingDislike = comment.dislikes.find(
      dislike => dislike.user.toString() === req.user._id.toString()
    );

    // Remove dislike if exists
    if (existingDislike) {
      comment.dislikes.pull(existingDislike._id);
    }

    // Toggle like
    if (existingLike) {
      comment.likes.pull(existingLike._id);
      await comment.save();
      return res.json({
        message: 'Like removed',
        liked: false,
        likeCount: comment.likeCount
      });
    } else {
      comment.likes.push({ user: req.user._id });
      await comment.save();
      return res.json({
        message: 'Comment liked',
        liked: true,
        likeCount: comment.likeCount
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Dislike/Undislike a comment
router.post('/:id/dislike', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const existingDislike = comment.dislikes.find(
      dislike => dislike.user.toString() === req.user._id.toString()
    );

    const existingLike = comment.likes.find(
      like => like.user.toString() === req.user._id.toString()
    );

    // Remove like if exists
    if (existingLike) {
      comment.likes.pull(existingLike._id);
    }

    // Toggle dislike
    if (existingDislike) {
      comment.dislikes.pull(existingDislike._id);
      await comment.save();
      return res.json({
        message: 'Dislike removed',
        disliked: false,
        dislikeCount: comment.dislikeCount
      });
    } else {
      comment.dislikes.push({ user: req.user._id });
      await comment.save();
      return res.json({
        message: 'Comment disliked',
        disliked: true,
        dislikeCount: comment.dislikeCount
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Pin/Unpin a comment (video owner only)
router.post('/:id/pin', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const video = await Video.findById(comment.video);
    if (video.uploader.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Only video owner can pin comments' });
    }

    // Unpin all other comments on this video
    await Comment.updateMany(
      { video: comment.video },
      { isPinned: false }
    );

    // Toggle pin status
    comment.isPinned = !comment.isPinned;
    await comment.save();

    res.json({
      message: comment.isPinned ? 'Comment pinned' : 'Comment unpinned',
      pinned: comment.isPinned
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
