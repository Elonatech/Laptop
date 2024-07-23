import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    }, 1000);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-orange-400" />
        ) : (
          <FaRegStar key={i} className="text-[#cec8c8] mr-1" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="border-2 rounded-sm [transition:box-shadow_0.3s] ease-linear relative w-[221.48px] h-[370px] hover:hover:[box-shadow:0_0_10px_rgba(0,0,0,0.1)]">
      <Link to={`/product/${product.id}`} className="no-underline">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-auto mb-3"
        />
        <h3 className="text-[12px] h-[32px] text-[#313133] overflow-x-auto">
          {product.name}
        </h3>
      </Link>
      <p className="text-lg font-bold text-orange-400 mb-3">
        <FaNairaSign />
        {product.price.toLocaleString()}
      </p>
      <div className="flex items-center mb-[10px]">
        {renderStars(product.rating)}
        <span className="text-sm text-gray-400 ml-2">
          ({product.ratingCount})
        </span>
      </div>
      <button
        className="cursor-pointer text-[#faa652] text-lg mb-[10px] absolute right-[20px] bottom-[155px] bg-[rgb(252,_246,_246)] border-[none] w-[30px] h-[30px] active:border-2 focus:bg-orange-500 active:bg-orange-500  rounded-1/2 hover:bg-[#aca7a7]"
        onClick={toggleLike}
      >
        {liked ? (
          <FaHeart className="text-[#faa652]" />
        ) : (
          <FaRegHeart className="text-sm" />
        )}
      </button>
      {quantity === 0 ? (
        <button
          className="w-full p-[10px] bg-[#f68b1e] text-[white] border-[none] rounded-[4px] cursor-pointer [transition:background-color_0.3s]  text-[1.2rem] hover:bg-[#f68b1e] hover:text-[#fff]"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex justify-between items-center bg-[#fff] rounded-[4px] overflow-hidden">
          <button
            className="bg-[#fff] text-[#f68b1e] border-[none] px-[15px] py-[10px] text-[1.2rem] cursor-pointer [transition:background-color_0.3s] hover:bg-[#f68b1e] hover:text-[#fff]"
            onClick={decreaseQuantity}
          >
            <FaMinus />
          </button>
          <span className="text-[1.2rem] text-[#f68b1e]">{quantity}</span>
          <button
            className="bg-[#fff] text-[#f68b1e] border-[none] px-[15px] py-[10px] text-[1.2rem] cursor-pointer [transition:background-color_0.3s]"
            onClick={increaseQuantity}
          >
            <FaPlus />
          </button>
        </div>
      )}
      {showSuccessMessage && (
        <div className="">
          <FaCheckCircle className="" />
          Product added successfully!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
