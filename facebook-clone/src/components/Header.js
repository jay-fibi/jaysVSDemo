import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook"
          className="header__logo"
        />
        <div className="header__input">
          <i className="fas fa-search"></i>
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <i className="fas fa-home"></i>
        </div>
        <div className="header__option">
          <i className="fas fa-flag"></i>
        </div>
        <div className="header__option">
          <i className="fas fa-play-circle"></i>
        </div>
        <div className="header__option">
          <i className="fas fa-users"></i>
        </div>
        <div className="header__option">
          <i className="fas fa-gamepad"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Profile"
            className="header__avatar"
          />
          <h4>User Name</h4>
        </div>
        <i className="fas fa-plus"></i>
        <i className="fab fa-facebook-messenger"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-caret-down"></i>
      </div>
    </div>
  );
}

export default Header;
