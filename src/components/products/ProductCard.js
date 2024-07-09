import React, { useState } from 'react';
import './ProductCard.css';
import { FaNairaSign } from "react-icons/fa6";

const ProductCard = ({ product, addToCart }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`product-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p><FaNairaSign className='naira'/>{product.price}</p>
      <button 
        className={`add-to-cart ${hovered ? 'visible' : ''}`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
