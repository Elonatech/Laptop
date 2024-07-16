import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaCheckCircle } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const ProductCard = ({ product, addToCart, updateCartItemQuantity, removeFromCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (quantity === 0) {
      addToCart(product, newQuantity);
      showAddToCartMessage();
    } else {
      updateCartItemQuantity(product.id, newQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItemQuantity(product.id, newQuantity);
    } else if (quantity === 1) {
      setQuantity(0);
      removeFromCart(product.id);
    }
  };

  const handleAddToCart = () => {
    setQuantity(1);
    addToCart(product, 1);
    showAddToCartMessage();
  };

  const showAddToCartMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
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
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
      </Link>
      <p className="product-price"><FaNairaSign />{product.price.toLocaleString()}</p>
      <div className="product-rating">
        {renderStars(product.rating)}
        <span className="rating-count">({product.ratingCount})</span>
      </div>
      <button className="like-button" onClick={toggleLike}>
        {liked ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
      </button>
      {quantity === 0 ? (
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <div className="quantity-controls">
          <button className="quantity-btn minus" onClick={decreaseQuantity}><FaMinus /></button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn plus" onClick={increaseQuantity}><FaPlus /></button>
        </div>
      )}
      {showSuccessMessage && (
        <div className="success-message">
          <FaCheckCircle className="success-icon2" />
          Product added successfully!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
