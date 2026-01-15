import { useEffect } from 'react';

const Products = () => {
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
      <div className="page-heading" id="top">
        <div className="container">
          <div className="inner-content">
            <h2>Check Our Products</h2>
            <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
          </div>
        </div>
      </div>

      {/* Products Area */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-heading">
            <h2>Our Latest Products</h2>
            <span>Check out all of our products.</span>
          </div>
          <div className="products-grid">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/menimg1.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Statement Bottoms</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/menimg2.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Smart Formals</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/menimg3.webp" alt="" />
              </div>
              <div className="down-content">
                <h4>Lean Fits</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/menimg4.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Off-Duty Polos</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/woimg1.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Green Jacket</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/woimg2.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Dress</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/woimg3.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Spring Collection</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/woimg4.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Spring</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/kid-04.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Spring</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/men-01.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Spring</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/men-02.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Air Force 1 X</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/men-03.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Love Nana '20</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/product1.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>New Green Jacket</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/product2.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Dress</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/product3.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Spring Collection</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/kid-01.png" alt="" />
              </div>
              <div className="down-content">
                <h4>School Collection</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/kid-02.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Summer Cap</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <img src="/assets/images/kid-03.png" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Kid</h4>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
            <div className="pagination-container">
              <div className="pagination">
                <ul>
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;