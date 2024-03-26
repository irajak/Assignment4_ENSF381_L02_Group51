import React, { useState } from 'react';
import Header from './Header'; // Assuming the correct path is used
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer'; // Assuming the correct path is used

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...exists, quantity: exists.quantity - 1 } : item));
    }
  };

  return (
    <div>
      <Header />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default ProductPage;