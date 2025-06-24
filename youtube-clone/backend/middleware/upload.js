const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { errorResponse } = require('../utils/responseHelper');

// Create uploads directory if it doesn't exist
const createUploadDirs = () => {
  const dirs = ['uploads/videos', 'uploads/thumbnails', 'uploads/profiles', 'uploads/chunks'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createUploadDirs();

// Storage configuration for different file types
const createStorage = (destination) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
};

// File filter for videos
const videoFileFilter = (req, file, cb) => {
  const allowedTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/flv'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only video files are allowed'), false);
  }
};

// File filter for images
const imageFileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

// Video upload configuration
const videoUpload = multer({
  storage: createStorage('uploads/videos'),
  fileFilter: videoFileFilter,
  limits: {
    fileSize: 500 * 1024 * 1024 // 500MB
  }
});

// Thumbnail upload configuration
const thumbnailUpload = multer({
  storage: createStorage('uploads/thumbnails'),
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Profile picture upload configuration
const profileUpload = multer({
  storage: createStorage('uploads/profiles'),
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB
  }
});

// Chunk upload configuration (for chunked video uploads)
const chunkUpload = multer({
  storage: createStorage('uploads/chunks'),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB per chunk
  }
});

// Generic upload configuration
const genericUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 500 * 1024 * 1024 // 500MB
  }
});

// Error handling middleware
const handleUploadError = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return errorResponse(res, 'File too large', 400);
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return errorResponse(res, 'Too many files', 400);
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return errorResponse(res, 'Unexpected file field', 400);
    }
  }
  
  if (error.message.includes('Only')) {
    return errorResponse(res, error.message, 400);
  }
  
  return errorResponse(res, 'Upload error', 500);
};

module.exports = {
  single: (fieldName) => {
    if (fieldName === 'video') return videoUpload.single('video');
    if (fieldName === 'thumbnail') return thumbnailUpload.single('thumbnail');
    if (fieldName === 'profilePicture') return profileUpload.single('profilePicture');
    if (fieldName === 'chunk') return chunkUpload.single('chunk');
    return genericUpload.single(fieldName);
  },
  array: (fieldName, maxCount = 5) => {
    return genericUpload.array(fieldName, maxCount);
  },
  fields: (fields) => {
    return genericUpload.fields(fields);
  },
  handleUploadError
};
