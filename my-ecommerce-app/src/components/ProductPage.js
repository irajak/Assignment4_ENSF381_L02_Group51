import React, { useState, useEffect } from 'react';
import Header from './Header'; // Adjust the path as needed
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer'; // Adjust the path as needed
import products from '../data/products'; // Adjust the path as needed

const Productpage = () => {
  // Load cart items from local storage
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  useEffect(() => {
    // Save cart items to local storage when cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      // If product exists, increase the quantity
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      // If product does not exist, add to cart with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists && exists.quantity === 1) {
      // If only one item left, remove it from the cart
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else if (exists) {
      // If more than one item, reduce the quantity
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList products={products} addToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;

