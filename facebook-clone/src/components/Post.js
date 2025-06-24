import React, { useState } from 'react';
import './Post.css';

function Post({ profilePic, image, username, timestamp, message }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now(),
        text: newComment,
        user: 'You',
        timestamp: 'just now'
      }]);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <img src={profilePic} alt="" className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {image && (
        <div className="post__image">
          <img src={image} alt="" />
        </div>
      )}

      <div className="post__options">
        <div className="post__option" onClick={handleLike}>
          <i className={`fas fa-thumbs-up ${liked ? 'liked' : ''}`}></i>
          <p>Like {likes > 0 && `(${likes})`}</p>
        </div>
        <div className="post__option" onClick={() => setShowComments(!showComments)}>
          <i className="fas fa-comment"></i>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <i className="fas fa-share"></i>
          <p>Share</p>
        </div>
      </div>

      {showComments && (
        <div className="post__comments">
          {comments.map((comment) => (
            <div key={comment.id} className="post__comment">
              <strong>{comment.user}:</strong> {comment.text}
              <span className="post__commentTime">{comment.timestamp}</span>
            </div>
          ))}
          <form onSubmit={handleComment} className="post__commentForm">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Post;
