const express = require('express');
const multer = require('multer');
const path = require('path');
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

// Multer configuration for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 500 * 1024 * 1024 // 500MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed'));
    }
  }
});

// Get all videos
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const category = req.query.category;
    const search = req.query.search;
    const sortBy = req.query.sortBy || 'createdAt';
    const order = req.query.order === 'asc' ? 1 : -1;

    const query = { isPublic: true, processingStatus: 'completed' };

    // Add category filter
    if (category && category !== 'all') {
      query.category = category;
    }

    // Add search filter
    if (search) {
      query.$text = { $search: search };
    }

    const videos = await Video.find(query)
      .populate('uploader', 'username channelName avatar')
      .sort({ [sortBy]: order })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();

    const total = await Video.countDocuments(query);

    res.json({
      videos,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single video
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate('uploader', 'username channelName avatar subscriberCount')
      .populate({
        path: 'comments',
        populate: {
          path: 'author',
          select: 'username avatar'
        }
      });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Increment view count
    video.views += 1;
    await video.save();

    res.json({ video });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Upload video
router.post('/upload', auth, upload.single('video'), async (req, res) => {
  try {
    const { title, description, category, tags, isPublic } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No video file provided' });
    }

    const video = new Video({
      title,
      description,
      category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      isPublic: isPublic !== 'false',
      videoUrl: `/uploads/videos/${req.file.filename}`,
      uploader: req.user._id,
      processingStatus: 'pending'
    });

    await video.save();

    // Add video to user's videos array
    req.user.videos.push(video._id);
    await req.user.save();

    res.status(201).json({
      message: 'Video uploaded successfully',
      video: {
        id: video._id,
        title: video.title,
        processingStatus: video.processingStatus
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error: error.message });
  }
});

// Update video
router.put('/:id', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if user owns the video
    if (video.uploader.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this video' });
    }

    const { title, description, category, tags, isPublic } = req.body;

    video.title = title || video.title;
    video.description = description || video.description;
    video.category = category || video.category;
    video.tags = tags ? tags.split(',').map(tag => tag.trim()) : video.tags;
    video.isPublic = isPublic !== undefined ? isPublic : video.isPublic;

    await video.save();

    res.json({ message: 'Video updated successfully', video });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete video
router.delete('/:id', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if user owns the video
    if (video.uploader.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this video' });
    }

    await Video.findByIdAndDelete(req.params.id);

    // Remove video from user's videos array
    req.user.videos.pull(video._id);
    await req.user.save();

    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Like/Unlike video
router.post('/:id/like', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const existingLike = video.likes.find(
      like => like.user.toString() === req.user._id.toString()
    );

    const existingDislike = video.dislikes.find(
      dislike => dislike.user.toString() === req.user._id.toString()
    );

    // Remove dislike if exists
    if (existingDislike) {
      video.dislikes.pull(existingDislike._id);
    }

    // Toggle like
    if (existingLike) {
      video.likes.pull(existingLike._id);
      await video.save();
      return res.json({ message: 'Like removed', liked: false, likeCount: video.likeCount });
    } else {
      video.likes.push({ user: req.user._id });
      await video.save();
      return res.json({ message: 'Video liked', liked: true, likeCount: video.likeCount });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Dislike/Undislike video
router.post('/:id/dislike', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const existingDislike = video.dislikes.find(
      dislike => dislike.user.toString() === req.user._id.toString()
    );

    const existingLike = video.likes.find(
      like => like.user.toString() === req.user._id.toString()
    );

    // Remove like if exists
    if (existingLike) {
      video.likes.pull(existingLike._id);
    }

    // Toggle dislike
    if (existingDislike) {
      video.dislikes.pull(existingDislike._id);
      await video.save();
      return res.json({ message: 'Dislike removed', disliked: false, dislikeCount: video.dislikeCount });
    } else {
      video.dislikes.push({ user: req.user._id });
      await video.save();
      return res.json({ message: 'Video disliked', disliked: true, dislikeCount: video.dislikeCount });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's videos
router.get('/user/:userId', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const videos = await Video.find({ 
      uploader: req.params.userId, 
      isPublic: true,
      processingStatus: 'completed'
    })
      .populate('uploader', 'username channelName avatar')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Video.countDocuments({ 
      uploader: req.params.userId, 
      isPublic: true,
      processingStatus: 'completed'
    });

    res.json({
      videos,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
