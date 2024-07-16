import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [liked, setLiked] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert(`${product.name} has been added to your cart!`);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star" />
      );
    }
    return stars;
  };

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="thumbnail-images">
            {/* Add more thumbnail images here */}
            <img src={product.image} alt={product.name} className="thumbnail" />
            <img src={product.image} alt={product.name} className="thumbnail" />
            <img src={product.image} alt={product.name} className="thumbnail" />
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-meta">
            <span className="brand">Brand: {product.brand || 'Generic'}</span>
            <span className="separator">|</span>
            <span className="sku">SKU: {product.sku || 'N/A'}</span>
          </div>
          <div className="product-rating">
            {renderStars(product.rating || 0)}
            <span className="rating-count">({product.ratingCount || 0} ratings)</span>
          </div>
          <div className="product-price">
            <span className="current-price"><FaNairaSign />{product.price.toLocaleString()}</span>
            <span className="original-price"><FaNairaSign />{(product.price * 1.2).toLocaleString()}</span>
            <span className="discount">-20%</span>
          </div>
          <div className="shipping-info">
            <FaTruck /> Free delivery on orders above <FaNairaSign />50,000 in Lagos
          </div>
          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="like-button" onClick={toggleLike}>
              {liked ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
            </button>
          </div>
          <div className="product-features">
            <div className="feature">
              <FaShieldAlt />
              <span>7 Days Return Policy</span>
            </div>
            <div className="feature">
              <FaUndo />
                <span>100% Authentic</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-tabs">
        <div className="tab-content">
          <h2>Product details</h2>
          <p>{product.description || `
            Experience the power of Intel's latest processor technology with the ${product.name}. 
            This laptop is designed for optimal performance and efficiency, making it perfect for both work and entertainment.
            
            Key Features:
            - Intel Core i5 processor for smooth multitasking
            - 16GB RAM for seamless application switching
            - 512GB SSD for fast boot times and ample storage
            - 15.6" Full HD display for crisp visuals
            - Windows 11 for the latest features and security updates
            
            Whether you're a professional, student, or casual user, this laptop offers the perfect balance of power and portability.
          `}</p>
        </div>
        <div className="tab-content">
          <h2>Specifications</h2>
          <table className="specs-table">
            <tbody>
              <tr><td>SKU</td><td>{product.sku || 'LA092EA1MRHXPNAFAMZ'}</td></tr>
              <tr><td>Product Line</td><td>{product.productLine || 'Generic'}</td></tr>
              <tr><td>Model</td><td>{product.model || '15-DW3153CL'}</td></tr>
              <tr><td>Production Country</td><td>{product.productionCountry || 'China'}</td></tr>
              <tr><td>Weight (kg)</td><td>{product.weight || '1.8'}</td></tr>
              <tr><td>Color</td><td>{product.color || 'Silver'}</td></tr>
              <tr><td>Main Material</td><td>{product.mainMaterial || 'Plastic'}</td></tr>
              <tr><td>Operating System</td><td>{product.os || 'Windows 11'}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;