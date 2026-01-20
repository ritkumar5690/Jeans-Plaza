import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const isCategoryActive = (category: string) => {
    const currentCategory = searchParams.get('category') || 'all';
    return location.pathname === '/products' && currentCategory === category ? 'active' : '';
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="main-navigation">
          {/* Logo */}
          <Link to="/" className="site-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="JEANS PLAZA" />
            <span className="logo-text">JEANS PLAZA</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/products?category=men" className={isCategoryActive('men')}>Men</Link></li>
            <li><Link to="/products?category=women" className={isCategoryActive('women')}>Women</Link></li>
            <li><Link to="/products?category=kids" className={isCategoryActive('kids')}>Kids</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
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
            <li><Link to="/" className={isActive('/')} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/products?category=men" className={isCategoryActive('men')} onClick={closeMobileMenu}>Men</Link></li>
            <li><Link to="/products?category=women" className={isCategoryActive('women')} onClick={closeMobileMenu}>Women</Link></li>
            <li><Link to="/products?category=kids" className={isCategoryActive('kids')} onClick={closeMobileMenu}>Kids</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
