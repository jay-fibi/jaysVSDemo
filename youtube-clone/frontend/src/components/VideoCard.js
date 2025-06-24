import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="video-card">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="video-thumbnail"
      />
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-meta">
          <div className="video-channel">{video.channel}</div>
          <div className="video-stats">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.uploadDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
