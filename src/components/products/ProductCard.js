import React from 'react';
import './ProductCard.css';
import { FaNairaSign } from "react-icons/fa6";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          <FaNairaSign />{product.price.toLocaleString()}
        </p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;