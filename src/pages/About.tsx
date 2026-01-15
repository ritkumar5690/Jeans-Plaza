import { useEffect } from 'react';

const About = () => {
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
            <h2>About Our Company</h2>
            <span>Awesome, clean &amp; creative HTML5 Template</span>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="about-us">
        <div className="container">
          <div className="section-content">
            <div className="left-image">
              <img src="/assets/images/about-left-image.jpg" alt="" />
            </div>
            <div className="right-content">
              <h4>About Us &amp; Our Skills</h4>
              <span>At JEANS PLAZA, our expertise lies in crafting high-quality denim with precision, comfort, and style. From fabric selection to final stitching, our skilled team focuses on every detail to deliver jeans that truly stand out.</span>
              <div className="quote">
                <i className="fa fa-quote-left"></i><p>"Excellence is a skill we practice every day."</p>
              </div>
              <p>Driven by skill and shaped by experience, JEANS PLAZA blends quality craftsmanship with modern design to create denim made to last.</p>
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <section className="our-team">
        <div className="container">
          <div className="section-heading">
            <h2>Our Amazing Team</h2>
            <span>Every detail matters—and that's what makes JEANS PLAZA stand out.</span>
          </div>
          <div className="team-grid">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
                <img src="/assets/images/team-member-01.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
                <img src="/assets/images/team-member-02.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
                <img src="/assets/images/team-member-03.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;