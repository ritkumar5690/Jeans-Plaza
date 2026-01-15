import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Component-level JS init
  useEffect(() => {
    // Scroll to top if no hash
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Main Banner Area */}
      <div className="main-banner" id="top">
        <div className="container">
          <div className="banner-content">
            <div className="left-content m-0 p-0">
              <div className="thumb">
                <div className="inner-content">
                  <h4>We Are JEANS PLAZA</h4>
                  <span>Awesome design &amp; best products</span>
                  <div className="main-border-button">
                    <a href="#men">Purchase Now!</a>
                  </div>
                </div>
                <img src="/assets/images/left-banner-image.png" alt="" />
              </div>
            </div>
            <div className="right-content">
              <div className="banner-grid">
                <div className="right-first-image">
                  <div className="thumb">
                    <div className="inner-content">
                      <h4>Women</h4>
                      <span>Best Clothes For Women</span>
                    </div>
                    <div className="hover-content">
                      <div className="inner">
                        <h4>Women</h4>
                        <p>visit for more like products.</p>
                        <div className="main-border-button">
                          <a href="#women">Discover More</a>
                        </div>
                      </div>
                    </div>
                    <img src="/assets/images/baner-right-image-01.png" alt="" />
                  </div>
                </div>
                <div className="right-first-image">
                  <div className="thumb">
                    <div className="inner-content">
                      <h4>Men</h4>
                      <span>Best Clothes For Men</span>
                    </div>
                    <div className="hover-content">
                      <div className="inner">
                        <h4>Men</h4>
                        <p>visit for more like products..</p>
                        <div className="main-border-button">
                          <a href="#men">Discover More</a>
                        </div>
                      </div>
                    </div>
                    <img src="/assets/images/baner-right-image-02.png" alt="" />
                  </div>
                </div>
                <div className="right-first-image">
                  <div className="thumb">
                    <div className="inner-content">
                      <h4>Kids</h4>
                      <span>Best Clothes For Kids</span>
                    </div>
                    <div className="hover-content">
                      <div className="inner">
                        <h4>Kids</h4>
                        <p>visit for more like products..</p>
                        <div className="main-border-button">
                          <a href="#kids">Discover More</a>
                        </div>
                      </div>
                    </div>
                    <img src="/assets/images/baner-right-image-03.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Men Area */}
      <section className="trending" id="men">
        <div className="container">
          <h2>Trending Men Styles</h2>
          <p className="section-subtitle">Discover the latest trends in men's fashion</p>
          <div className="grid grid-cols-7 gap-6">
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Bottoms</h4>
                  <span>Statement</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Bottoms</h4>
                    <p>Statement</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/menimg1.png" alt="Statement Bottoms" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Formals</h4>
                  <span>Smart</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Formals</h4>
                    <p>Smart</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/menimg2.png" alt="Smart Formals" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Fits</h4>
                  <span>Lean</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Fits</h4>
                    <p>Lean</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/menimg3.webp" alt="Lean Fits" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Polos</h4>
                  <span>Off-Duty</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Polos</h4>
                    <p>Off-Duty</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/menimg4.png" alt="Off-Duty Polos" />
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/* Women Area */}
      <section className="trending" id="women">
        <div className="container">
          <h2>Women's Latest</h2>
          <p className="section-subtitle">Explore the newest women's fashion collection</p>
          <div className="grid grid-cols-4 gap-6">
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Green Jacket</h4>
                  <span>New</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Green Jacket</h4>
                    <p>New</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/woimg1.png" alt="New Green Jacket" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Dress</h4>
                  <span>Classic</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Dress</h4>
                    <p>Classic</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/woimg2.png" alt="Classic Dress" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Collection</h4>
                  <span>Spring</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Collection</h4>
                    <p>Spring</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/woimg3.png" alt="Spring Collection" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Spring</h4>
                  <span>Classic</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Spring</h4>
                    <p>Classic</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/woimg4.png" alt="Classic Spring" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Area */}
      <section className="trending" id="kids">
        <div className="container">
          <h2>Kids's Latest</h2>
          <p className="section-subtitle">Find the perfect outfits for your little ones</p>
          <div className="grid grid-cols-4 gap-6">
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Green Jacket</h4>
                  <span>New</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Green Jacket</h4>
                    <p>New</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/kid-01.png" alt="New Green Jacket" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Dress</h4>
                  <span>Classic</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Dress</h4>
                    <p>Classic</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/kid-02.png" alt="Classic Dress" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Collection</h4>
                  <span>Spring</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Collection</h4>
                    <p>Spring</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/kid-03.png" alt="Spring Collection" />
              </div>
            </div>
            <div className="right-first-image">
              <div className="thumb">
                <div className="inner-content">
                  <h4>Spring</h4>
                  <span>Classic</span>
                </div>
                <div className="hover-content">
                  <div className="inner">
                    <h4>Spring</h4>
                    <p>Classic</p>
                    <div className="main-border-button">
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <img src="/assets/images/kid-04.jpg" alt="Classic Spring" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Area */}
      <section className="section" id="explore">
        <div className="section-container">
          <div className="section-content">
            <div className="left-content">
              <h2>Explore Our Products</h2>
              <span>Discover premium-quality denim designed for comfort, durability, and timeless style. At JEANS PLAZA, we bring you versatile jeans that fit every lifestyle—from everyday wear to standout occasions..</span>
              <div className="quote">
                <i className="fa fa-quote-left"></i><p>Your perfect fit starts at JEANS PLAZA.</p>
              </div>
              <p>At JEANS PLAZA, we offer premium denim that combines superior comfort, durable quality, and timeless style, ensuring the perfect fit for everyday wear and every occasion..</p>
              <div className="main-border-button">
                <Link to="/products">Discover More</Link>
              </div>
            </div>
            <div className="right-content">
              <div className="product-grid">
                <div className="product-item leather">
                  <h4>Jacket</h4>
                  <span>Latest Collection</span>
                </div>
                <div className="product-item">
                  <img src="/assets/images/sproduct1.jpg" alt="" />
                </div>
                <div className="product-item">
                  <img src="/assets/images/sproduct2.jpg" alt="" />
                </div>
                <div className="product-item types">
                  <h4>Different Types</h4>
                  <span>Over 304 Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Area */}
      <section className="section" id="social">
        <div className="section-container">
          <div className="section-heading">
            <h2>Social Media</h2>
            <span>Every detail matters—and that's what makes JEANS PLAZA stand out.</span>
          </div>
          <div className="images">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Fashion</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <img src="/assets/images/instagram-01.jpg" alt="" />
            </div>
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>New</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <img src="/assets/images/instagram-02.jpg" alt="" />
            </div>
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Brand</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <img src="/assets/images/instagram-03.jpg" alt="" />
            </div>
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Makeup</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <img src="/assets/images/instagram-04.jpg" alt="" />
            </div>
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Leather</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <img src="/assets/images/instagram-05.jpg" alt="" />
            </div>
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Bag</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <img src="/assets/images/instagram-06.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Area */}
      <div className="subscribe">
        <div className="container">
          <div className="subscribe-content">
            <div>
              <div className="section-heading">
                <h2>Visit our Store</h2>
                <span>Every detail matters—and that's what makes JEANS PLAZA stand out.</span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="form-row">
                  <fieldset>
                    <input name="name" type="text" id="name" placeholder="Your Name" required />
                  </fieldset>
                  <fieldset>
                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required />
                  </fieldset>
                  <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <div className="store-info">
              <h3>Store Information</h3>
              <div className="store-info-grid">
                <ul>
                  <li><strong>Store Location:</strong><br /><span>69F6+P4Q, Siwan - Barharia - Sarfara Rd, Naya Bazar, Babhnauli, Siwan, Bihar 841226</span></li>
                  <li><strong>Phone:</strong><br /><span>9798114076</span></li>
                  <li><strong>Office Location:</strong><br /><span>bihar siwan</span></li>
                </ul>
                <ul>
                  <li><strong>Work Hours:</strong><br /><span>07:30 AM - 9:30 PM Daily</span></li>
                  <li><strong>Email:</strong><br /><span>info@company.com</span></li>
                  <li><strong>Social Media:</strong><br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;