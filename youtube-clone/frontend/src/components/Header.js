import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onUploadClick, currentUser }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <i className="fab fa-youtube"></i>
          VidTube
        </Link>

        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <div className="user-actions">
          <button className="upload-btn" onClick={onUploadClick}>
            <i className="fas fa-video"></i>
          </button>
          
          {currentUser ? (
            <div className="user-profile">
              <img
                src={currentUser.avatar || 'https://via.placeholder.com/32x32'}
                alt="Profile"
                className="channel-avatar"
              />
            </div>
          ) : (
            <button className="sign-in-btn">
              <i className="fas fa-user-circle"></i>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
