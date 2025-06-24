import React from 'react';
import VideoCard from '../components/VideoCard';

const Home = ({ videos }) => {
  return (
    <div className="home">
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
