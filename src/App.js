
import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import CartButton from './components/cartButton/CartButton';
import CartPage from './components/CartPage';
import emailjs from 'emailjs-com';
import ProductDetail from './components/productDetail/ProductDetail';
import BillingPage from './components/billingPage/BillingPage';
import { products } from './data';


const App = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const checkout = (reference) => {
    const formatOrderDetails = (cart) => {
      return cart.map(item => `${item.name} - Quantity: ${item.quantity}`).join('\n');
    };
    
    const templateParams = {
      to_name: 'Elonatech',
      order_details: formatOrderDetails(cart),
      to_email: 'theamazingkeyz@gmail.com',
      from_name: 'Elonatech stores',
      payment_reference: reference ? reference.reference : 'N/A',
    };
    
    emailjs
      .send(
        "service_4j9v8gu",
        "template_u8guywf",
        templateParams,
        "6m8OAUHLMtRXyi9eA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to place order");
        }
      );
  };

  return (
    <div className="">
      <header>
        <CartButton
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          onClick={() => navigate("/cart")}
        />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-[20px] max-w-[900px] mx-[auto] my-[0]">
              <div className="grid grid-cols-[repeat(4,_1fr)] gap-10">
                {products.map((product) => (
                  <ProductCard
                    className="border-[1px] border-[solid] border-[#ccc] p-[20px] rounded-[5px] text-left"
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    updateCartItemQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              checkout={checkout}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              products={products}
              addToCart={addToCart}
              updateCartItemQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/billing"
          element={
            <BillingPage
              cartItems={cart}
              totalPrice={cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              checkout={checkout}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

