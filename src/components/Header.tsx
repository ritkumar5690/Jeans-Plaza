import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="main-navigation">
          {/* Logo */}
          <Link to="/" className="site-logo" onClick={closeMobileMenu}>
            <img src="/assets/images/logo.png" alt="JEANS PLAZA" />
            <span className="logo-text">JEANS PLAZA</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            <li><Link to="/" className="active">Home</Link></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#kids">Kids</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><a href="#men" onClick={closeMobileMenu}>Men</a></li>
            <li><a href="#women" onClick={closeMobileMenu}>Women</a></li>
            <li><a href="#kids" onClick={closeMobileMenu}>Kids</a></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;