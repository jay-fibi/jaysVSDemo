import React, { useState } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      profilePic: 'https://via.placeholder.com/40',
      message: 'This is a test post!',
      timestamp: 'This is a timestamp',
      username: 'John Doe',
      image: 'https://via.placeholder.com/500x300'
    },
    {
      id: 2,
      profilePic: 'https://via.placeholder.com/40',
      message: 'Another test post with just text content.',
      timestamp: '2 hours ago',
      username: 'Jane Smith',
      image: null
    }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
