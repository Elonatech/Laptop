import React from 'react';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart, updateQuantity, checkout }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/billing', { state: { cartItems, totalPrice } });
  };

  return (
    <div className="bg-[#f1eeee] p-[25px]">
      <div className="max-w-[1200px] mx-[auto] my-[0] flex gap-[20px] items-center justify-center">
        <div className="flex-[2] bg-[#fff] rounded-[4px] p-[20px] [box-shadow:0_1px_3px_rgba(0,0,0,0.1)]">
          <h2 className="text-[20px] mb-[20px] text-[#282828]">
            Cart ({cartItems.length} items)
          </h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex px-[0] py-[20px] border-b-[1px_solid_#e0e0e0]"
            >
              <img src={item.image} alt={item.name} />
              <div className="flex-grow">
                <h3>{item.name}</h3>
                <p className="price">
                  <TbCurrencyNaira/>
                  {item.price.toLocaleString()}
                </p>
                <div className="bg-orange-500 flex text-white items-center justify-between ">
                  <button
                    className=" flex justify-between items-center space-x-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash /> REMOVE
                  </button>
                  <div className="flex items-center justify-between space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1">
          <h3>CART SUMMARY</h3>
          <div className="">
            <span>Subtotal</span>
            <span className="flex items-center">
              <TbCurrencyNaira />
              {totalPrice.toLocaleString()}
            </span>
          </div>
          <button className="flex items-center justify-between bg-orange-500 text-white p-4" onClick={handleCheckout}>
            CHECKOUT (<TbCurrencyNaira />
            {totalPrice.toLocaleString()})
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;