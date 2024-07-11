import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
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
      <div className="product-images">
        <img src={product.image} alt={product.name} className="main-image" />
        {/* Add more images here if available */}
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="product-rating">
          {renderStars(product.rating || 0)}
          <span className="rating-count">({product.ratingCount || 0} reviews)</span>
        </div>
        <p className="product-price"><FaNairaSign />{product.price.toLocaleString()}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        <button className="like-button" onClick={toggleLike}>
          {liked ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
          {liked ? 'Liked' : 'Like'}
        </button>
        <div className="product-description">
          <h2>Product Description</h2>
          <p>{product.description || 'No description available.'}</p>
        </div>
        <div className="product-specs">
          <h2>Specifications</h2>
          <ul>
            {product.specs && product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;