import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import UploadModal from './components/UploadModal';
import './index.css';

function App() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Simulate loading videos from API
    const sampleVideos = [
      {
        id: '1',
        title: 'Amazing Nature Documentary',
        channel: 'Nature Channel',
        views: '1.2M views',
        uploadDate: '2 days ago',
        thumbnail: 'https://picsum.photos/320/180?random=1',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        description: 'Explore the wonders of nature in this amazing documentary.',
        likes: 15420,
        dislikes: 234,
        subscribers: '2.5M'
      },
      {
        id: '2',
        title: 'Learn React in 30 Minutes',
        channel: 'Code Academy',
        views: '856K views',
        uploadDate: '1 week ago',
        thumbnail: 'https://picsum.photos/320/180?random=2',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        description: 'Complete React tutorial for beginners.',
        likes: 12340,
        dislikes: 156,
        subscribers: '1.8M'
      },
      {
        id: '3',
        title: 'Cooking Masterclass',
        channel: 'Chef\'s Kitchen',
        views: '2.1M views',
        uploadDate: '3 days ago',
        thumbnail: 'https://picsum.photos/320/180?random=3',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        description: 'Learn professional cooking techniques.',
        likes: 28950,
        dislikes: 421,
        subscribers: '4.2M'
      },
      {
        id: '4',
        title: 'Travel Vlog: Japan Adventure',
        channel: 'Travel Stories',
        views: '675K views',
        uploadDate: '5 days ago',
        thumbnail: 'https://picsum.photos/320/180?random=4',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        description: 'Join us on an incredible journey through Japan.',
        likes: 9876,
        dislikes: 98,
        subscribers: '950K'
      },
      {
        id: '5',
        title: 'Tech Review: Latest Gadgets',
        channel: 'Tech Hub',
        views: '1.5M views',
        uploadDate: '1 day ago',
        thumbnail: 'https://picsum.photos/320/180?random=5',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        description: 'Comprehensive review of the latest technology.',
        likes: 18765,
        dislikes: 287,
        subscribers: '3.1M'
      },
      {
        id: '6',
        title: 'Fitness Workout at Home',
        channel: 'Fit Life',
        views: '934K views',
        uploadDate: '4 days ago',
        thumbnail: 'https://picsum.photos/320/180?random=6',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        description: 'Complete home workout routine for all fitness levels.',
        likes: 11234,
        dislikes: 167,
        subscribers: '1.3M'
      }
    ];
    setVideos(sampleVideos);
  }, []);

  const handleUpload = (videoData) => {
    const newVideo = {
      id: Date.now().toString(),
      title: videoData.title,
      channel: currentUser?.name || 'Anonymous',
      views: '0 views',
      uploadDate: 'Just now',
      thumbnail: 'https://picsum.photos/320/180?random=' + Date.now(),
      videoUrl: URL.createObjectURL(videoData.file),
      description: videoData.description,
      likes: 0,
      dislikes: 0,
      subscribers: '0'
    };
    setVideos(prev => [newVideo, ...prev]);
    setShowUploadModal(false);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          onUploadClick={() => setShowUploadModal(true)}
          currentUser={currentUser}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home videos={videos} />} />
            <Route path="/video/:id" element={<VideoPlayer videos={videos} />} />
          </Routes>
        </main>

        {showUploadModal && (
          <UploadModal
            onClose={() => setShowUploadModal(false)}
            onUpload={handleUpload}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
