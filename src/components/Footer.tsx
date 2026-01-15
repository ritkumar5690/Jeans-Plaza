import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    const backToTopBtn = document.getElementById('backToTopBtn');

    const toggleBackToTop = () => {
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Contact Section */}
          <div className="footer-section footer-logo-section">
            <Link to="/" className="footer-logo">
              <img src="/assets/images/logo.png" alt="JEANS PLAZA" />
              <span className="footer-logo-text">JEANS <em>PLAZA</em></span>
            </Link>
            <ul className="footer-contact-info">
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i>
                  69F6+P4Q, Siwan - Barharia - Sarfara Rd, Naya Bazar, Babhnauli, Siwan, Bihar 841226
                </a>
              </li>
              <li>
                <a href="mailto:jeansplaza007@gmail.com">
                  <i className="fa fa-envelope"></i>
                  jeansplaza007@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:7633822418">
                  <i className="fa fa-phone"></i>
                  7633822418
                </a>
              </li>
            </ul>
          </div>

          {/* Shopping Categories */}
          <div className="footer-section">
            <h4 className="footer-section-title">Shopping & Categories</h4>
            <ul className="footer-nav">
              <li><a href="#men">Men's Shopping</a></li>
              <li><a href="#women">Women's Shopping</a></li>
              <li><a href="#kids">Kid's Shopping</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Useful Links</h4>
            <ul className="footer-nav">
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Help</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help & Information */}
          <div className="footer-section">
            <h4 className="footer-section-title">Help & Information</h4>
            <ul className="footer-nav">
              <li><a href="#">Help</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Tracking ID</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              Copyright © 2024 <Link to="/">JEANS PLAZA</Link> Co., Ltd. All Rights Reserved.
            </p>
            <div className="footer-social">
              <span className="footer-social-label">Follow Us:</span>
              <ul className="footer-social-links">
                <li><a href="#" className="fa fa-facebook" aria-label="Facebook"></a></li>
                <li><a href="#" className="fa fa-twitter" aria-label="Twitter"></a></li>
                <li><a href="#" className="fa fa-instagram" aria-label="Instagram"></a></li>
                <li><a href="#" className="fa fa-linkedin" aria-label="LinkedIn"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="footer-back-to-top"
        id="backToTopBtn"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;