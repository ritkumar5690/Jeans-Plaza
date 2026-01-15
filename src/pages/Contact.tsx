import { useEffect } from 'react';

const Contact = () => {
  // Component-level JS init
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

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

      {/* Page Heading */}
      <div className="page-heading about-page-heading" id="top">
        <div className="container">
          <div className="inner-content">
            <h2>Contact Us</h2>
            <span>Awesome, clean &amp; creative HTML5 Template</span>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="contact-us">
        <div className="container">
          <div className="section-content">
            <div className="map-container">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1493888827576!2d84.35560059678956!3d26.224335100000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc0496d4ff59%3A0x4ac146151f6b8253!2sJeans%20Plaza!5e0!3m2!1sen!2sin!4v1767644052227!5m2!1sen!2sin" width="100%" height="400px" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
              </div>
            </div>
            <div className="form-container">
              <div className="section-heading">
                <h2>Say Hello. Don't Be Shy!</h2>
                <span>Every detail matters—and that's what makes JEANS PLAZA stand out.</span>
              </div>
              <form id="contact" action="" method="post">
                <div className="form-grid">
                  <fieldset>
                    <input name="name" type="text" id="name" placeholder="Your name" required />
                  </fieldset>
                  <fieldset>
                    <input name="email" type="text" id="email" placeholder="Your email" required />
                  </fieldset>
                  <fieldset className="full-width">
                    <textarea name="message" rows={6} id="message" placeholder="Your message" required></textarea>
                  </fieldset>
                  <fieldset className="full-width">
                    <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i> Send Message</button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Area */}
      <div className="subscribe">
        <div className="container">
          <div className="subscribe-content">
            <div>
              <div className="section-heading">
                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
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
                  <li><strong>Phone:</strong><br /><span>7633822418</span></li>
                </ul>
                <ul>
                  <li><strong>Work Hours:</strong><br /><span>07:30 AM - 9:30 PM Daily</span></li>
                  <li><strong>Email:</strong><br /><span>jeansplaza007@gmail.com</span></li>
                  <li><strong>Social Media:</strong><br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Linkedin</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;