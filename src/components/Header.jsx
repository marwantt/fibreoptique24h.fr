import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">fibre optique <span className="text-accent">france</span></div>
        <div className="header-actions">
          <a href="tel:+33659896116" className="btn btn-primary btn-sm">
            📞 <span className="hidden-mobile">06 59 89 61 16</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
