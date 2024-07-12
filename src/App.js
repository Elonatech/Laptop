
import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ProductCard from './components/products/ProductCard';
import CartButton from './components/cartButton/CartButton';
import CartPage from './components/cartPage/CartPage';
import emailjs from 'emailjs-com';
import ProductDetail from './components/productDetail/ProductDetail';
import './App.css';

const products = [
  { id: 1, name: 'AOCWEI Laptop Windows 11 Intel Celeron 6GB+256GB SSD 15.6" 1920*1080 2.4G+5G WiFi +mouse', price: 290900, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/3648192/1.jpg?9563', rating: 4, ratingCount: 120 },
  { id: 2, name: 'Hp EliteBook 840 G6 Intel Core I5-16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Wins 11 Pro Laptop +BAG', price: 505000, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/148813/1.jpg?0177', rating: 5, ratingCount: 89 },
  { id: 3, name: 'WOZIFAN 14.1"Intel Celeron N4020 6GB+256GB,SSD Support To 1 TB，2.4G+5G Wi-Fi,1920*1080 Laptop Blue', price: 290300, image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/2669103/1.jpg?2435', rating: 3, ratingCount: 45 },
  { id: 4, name: 'Toshiba Portege X30W-J X360 Touchscreen 11Th Gen Intel Core I5,1TB SSD, 16GB RAM,13.3",Win 10 Pro', price: 868000, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/9832612/1.jpg?5121', rating: 4, ratingCount: 67 },
  { id: 5, name: 'DELL Latitude 3310 11Th Gen Intel®️ Core™️ I5-Quad Core 256GB SSD 8GB RAM 13.3"WIN10 Pro', price: 658000, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/871479/1.jpg?5583', rating: 5, ratingCount: 112 },
  { id: 6, name: 'Hp ProBook 11 X360- Intel Pentium 256GB SSD-TOUCHSCREEN 4GB RAM Windows10 Pro + Laptop Pouch', price: 193000, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/5662902/1.jpg?6764', rating: 3, ratingCount: 23 },
  { id: 7, name: 'Hp EliteBook 840 G6 Intel Core I5-8GB RAM/512GB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAG', price: 465000, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/089507/1.jpg?8587', rating: 4, ratingCount: 78 },
  { id: 8, name: 'DELL Latitude 7370 Intel Core I5 Keyboard Backlit, 8GB RAM, 256GB SSD Windows 11', price: 400000, image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2919891/1.jpg?0702', rating: 4, ratingCount: 56 },
];

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

  const checkout = () => {
    const formatOrderDetails = (cart) => {
      return cart.map(item => `${item.name} - Quantity: ${item.quantity}`).join('\n');
    };
    
    const templateParams = {
      to_name: 'Elonatech seller',
      order_details: formatOrderDetails(cart),
      to_email: 'chukwuj40@gmail.com',
      from_name: 'Elonatech Store',
    };
    
    emailjs.send('service_on3696o', 'template_arivmae', templateParams, '16FBCsBnDPoYTULEj')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Order placed!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to place order');
      });
  };

  return (
    <div className="app">
      <header>
        <CartButton cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onClick={() => navigate('/cart')} />
      </header>
      <Routes>
        <Route path="/" element={
          <div className="product-list-container">
            <div className="product-list">
              {products.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  updateCartItemQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
          </div>
        } />
        <Route path="/cart" element={
          <CartPage 
            cartItems={cart} 
            removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity}
            checkout={checkout} 
          />
        } />
        <Route path="/product/:id" element={
          <ProductDetail 
            products={products}
            addToCart={addToCart}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;

