import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-wrapper">
          <img src={logoWhite} alt="Logo" className="logo-img logo-dark" />
          <img src={logoBlack} alt="Logo" className="logo-img logo-light" />
          <div className="logo">fibre optique <span className="text-accent">france</span></div>
        </div>
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
