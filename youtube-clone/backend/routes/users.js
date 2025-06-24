const express = require('express');
const User = require('../models/User');
const Video = require('../models/Video');
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

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-password -email')
      .populate('videos', 'title thumbnailUrl views createdAt');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const { channelName, channelDescription, avatar } = req.body;

    req.user.channelName = channelName || req.user.channelName;
    req.user.channelDescription = channelDescription || req.user.channelDescription;
    req.user.avatar = avatar || req.user.avatar;

    await req.user.save();

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: req.user._id,
        username: req.user.username,
        channelName: req.user.channelName,
        channelDescription: req.user.channelDescription,
        avatar: req.user.avatar
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Subscribe to a channel
router.post('/:id/subscribe', auth, async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);

    if (!targetUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.params.id === req.user._id.toString()) {
      return res.status(400).json({ message: 'You cannot subscribe to yourself' });
    }

    // Check if already subscribed
    const alreadySubscribed = req.user.subscribedTo.includes(req.params.id);

    if (alreadySubscribed) {
      // Unsubscribe
      req.user.subscribedTo.pull(req.params.id);
      targetUser.subscribers.pull(req.user._id);
      
      await req.user.save();
      await targetUser.save();

      return res.json({
        message: 'Unsubscribed successfully',
        subscribed: false,
        subscriberCount: targetUser.subscriberCount
      });
    } else {
      // Subscribe
      req.user.subscribedTo.push(req.params.id);
      targetUser.subscribers.push(req.user._id);
      
      await req.user.save();
      await targetUser.save();

      return res.json({
        message: 'Subscribed successfully',
        subscribed: true,
        subscriberCount: targetUser.subscriberCount
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's subscriptions
router.get('/me/subscriptions', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('subscribedTo', 'username channelName avatar subscriberCount');

    res.json({ subscriptions: user.subscribedTo });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's subscribers
router.get('/:id/subscribers', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('subscribers', 'username channelName avatar');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ subscribers: user.subscribers });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's watch history
router.get('/me/history', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const user = await User.findById(req.user._id)
      .populate({
        path: 'watchHistory.video',
        populate: {
          path: 'uploader',
          select: 'username channelName'
        }
      })
      .lean();

    // Sort by watchedAt and paginate
    const sortedHistory = user.watchHistory
      .sort((a, b) => new Date(b.watchedAt) - new Date(a.watchedAt))
      .slice((page - 1) * limit, page * limit);

    const total = user.watchHistory.length;

    res.json({
      history: sortedHistory,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add video to watch history
router.post('/me/history', auth, async (req, res) => {
  try {
    const { videoId } = req.body;

    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Remove existing entry if exists
    req.user.watchHistory = req.user.watchHistory.filter(
      item => item.video.toString() !== videoId
    );

    // Add new entry at the beginning
    req.user.watchHistory.unshift({
      video: videoId,
      watchedAt: new Date()
    });

    // Keep only last 100 entries
    if (req.user.watchHistory.length > 100) {
      req.user.watchHistory = req.user.watchHistory.slice(0, 100);
    }

    await req.user.save();

    res.json({ message: 'Added to watch history' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's liked videos
router.get('/me/liked', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const user = await User.findById(req.user._id)
      .populate({
        path: 'likedVideos',
        populate: {
          path: 'uploader',
          select: 'username channelName'
        }
      });

    const total = user.likedVideos.length;
    const likedVideos = user.likedVideos
      .slice((page - 1) * limit, page * limit);

    res.json({
      videos: likedVideos,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Search users/channels
router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const users = await User.find({
      $or: [
        { username: { $regex: query, $options: 'i' } },
        { channelName: { $regex: query, $options: 'i' } }
      ]
    })
      .select('username channelName avatar subscriberCount')
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments({
      $or: [
        { username: { $regex: query, $options: 'i' } },
        { channelName: { $regex: query, $options: 'i' } }
      ]
    });

    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
