import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import menimg1 from '../assets/images/menimg1.png';
import menimg2 from '../assets/images/menimg2.png';
import menimg3 from '../assets/images/menimg3.webp';
import menimg4 from '../assets/images/menimg4.png';
import woimg1 from '../assets/images/woimg1.png';
import woimg2 from '../assets/images/woimg2.png';
import woimg3 from '../assets/images/woimg3.png';
import woimg4 from '../assets/images/woimg4.png';
import kidimg04 from '../assets/images/kid-04.jpg';
import men01 from '../assets/images/men-01.jpg';
import men02 from '../assets/images/men-02.jpg';
import men03 from '../assets/images/men-03.jpg';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/prouct3.jpg';
import kidimg01 from '../assets/images/kid-01.png';
import kidimg02 from '../assets/images/kid-02.png';
import kidimg03 from '../assets/images/kid-03.png';

interface Product {
  id: number;
  name: string;
  image: string;
  category: 'men' | 'women' | 'kids';
}

const Products = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');

  const category = searchParams.get('category') || 'all';

  // Product data with categories
  const products: Product[] = [
    // Men products
    { id: 1, name: 'Statement Bottoms', image: menimg1, category: 'men' },
    { id: 2, name: 'Smart Formals', image: menimg2, category: 'men' },
    { id: 3, name: 'Lean Fits', image: menimg3, category: 'men' },
    { id: 4, name: 'Off-Duty Polos', image: menimg4, category: 'men' },
    { id: 10, name: 'Classic Spring', image: men01, category: 'men' },
    { id: 11, name: 'Air Force 1 X', image: men02, category: 'men' },
    { id: 12, name: 'Love Nana \'20', image: men03, category: 'men' },
    // Women products
    { id: 5, name: 'Green Jacket', image: woimg1, category: 'women' },
    { id: 6, name: 'Classic Dress', image: woimg2, category: 'women' },
    { id: 7, name: 'Spring Collection', image: woimg3, category: 'women' },
    { id: 8, name: 'Classic Spring', image: woimg4, category: 'women' },
    { id: 13, name: 'New Green Jacket', image: product1, category: 'women' },
    { id: 14, name: 'Classic Dress', image: product2, category: 'women' },
    { id: 15, name: 'Spring Collection', image: product3, category: 'women' },
    // Kids products
    { id: 9, name: 'Classic Spring', image: kidimg04, category: 'kids' },
    { id: 16, name: 'School Collection', image: kidimg01, category: 'kids' },
    { id: 17, name: 'Summer Cap', image: kidimg02, category: 'kids' },
    { id: 18, name: 'Classic Kid', image: kidimg03, category: 'kids' },
  ];

  // Filter products based on category
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  // Component-level JS init
  useEffect(() => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [category]);

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
            <h2>
              {activeCategory === 'all' 
                ? 'Our Latest Products' 
                : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Products`}
            </h2>
            <span>Check out all of our products.</span>
          </div>
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                      <li><a href="#"><i className="fa fa-eye"></i></a></li>
                      <li><a href="#"><i className="fa fa-star"></i></a></li>
                      <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                  </div>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="down-content">
                  <h4>{product.name}</h4>
                  <ul className="stars">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            ))}
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
