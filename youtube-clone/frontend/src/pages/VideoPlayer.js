import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

const VideoPlayer = ({ videos }) => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const currentVideo = videos.find(v => v.id === id);
    setVideo(currentVideo);
    
    // Load sample comments
    setComments([
      {
        id: 1,
        author: 'John Doe',
        text: 'Great video! Really enjoyed watching this.',
        likes: 12,
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        author: 'Jane Smith',
        text: 'Thanks for sharing this content. Very informative!',
        likes: 8,
        timestamp: '5 hours ago'
      },
      {
        id: 3,
        author: 'Mike Johnson',
        text: 'Could you make a follow-up video on this topic?',
        likes: 3,
        timestamp: '1 day ago'
      }
    ]);
  }, [id, videos]);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: 'You',
        text: newComment,
        likes: 0,
        timestamp: 'Just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  if (!video) {
    return <div>Video not found</div>;
  }

  const relatedVideos = videos.filter(v => v.id !== id).slice(0, 10);

  return (
    <div className="video-player-page">
      <div className="video-player-container">
        <video
          className="video-player"
          controls
          autoPlay
          src={video.videoUrl}
        >
          Your browser does not support the video tag.
        </video>

        <div className="video-details">
          <h1 className="video-title-main">{video.title}</h1>
          
          <div className="video-actions">
            <div className="channel-info">
              <div className="channel-avatar"></div>
              <div>
                <div className="channel-name">{video.channel}</div>
                <div style={{ fontSize: '13px', color: '#606060' }}>
                  {video.subscribers} subscribers
                </div>
              </div>
              <button 
                className={`subscribe-btn ${subscribed ? 'subscribed' : ''}`}
                onClick={handleSubscribe}
                style={{
                  backgroundColor: subscribed ? '#ccc' : '#cc0000',
                  color: subscribed ? '#333' : 'white'
                }}
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            <div className="action-buttons">
              <button 
                className={`action-btn ${liked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <i className="fas fa-thumbs-up"></i>
                {parseInt(video.likes) + (liked ? 1 : 0)}
              </button>
              <button 
                className={`action-btn ${disliked ? 'disliked' : ''}`}
                onClick={handleDislike}
              >
                <i className="fas fa-thumbs-down"></i>
                {parseInt(video.dislikes) + (disliked ? 1 : 0)}
              </button>
              <button className="action-btn">
                <i className="fas fa-share"></i>
                Share
              </button>
              <button className="action-btn">
                <i className="fas fa-download"></i>
                Download
              </button>
            </div>
          </div>

          <div style={{ 
            padding: '16px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '8px',
            margin: '16px 0'
          }}>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: '500', 
              marginBottom: '8px' 
            }}>
              {video.views} • {video.uploadDate}
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
              {video.description}
            </div>
          </div>

          <div className="comments-section">
            <div className="comments-header">
              {comments.length} Comments
            </div>

            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <div className="comment-avatar"></div>
              <input
                type="text"
                className="comment-input"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </form>

            <div className="comments-list">
              {comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <div className="comment-author">
                      {comment.author} • {comment.timestamp}
                    </div>
                    <div className="comment-text">{comment.text}</div>
                    <div className="comment-actions">
                      <button className="comment-action">
                        <i className="fas fa-thumbs-up"></i>
                        {comment.likes}
                      </button>
                      <button className="comment-action">
                        <i className="fas fa-thumbs-down"></i>
                      </button>
                      <button className="comment-action">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="related-videos">
          {relatedVideos.map(relatedVideo => (
            <div key={relatedVideo.id} className="related-video">
              <img
                src={relatedVideo.thumbnail}
                alt={relatedVideo.title}
                className="related-thumbnail"
              />
              <div className="related-info">
                <div className="related-title">{relatedVideo.title}</div>
                <div className="related-channel">{relatedVideo.channel}</div>
                <div className="related-views">{relatedVideo.views}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
