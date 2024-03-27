import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} className= "product-image"/>
          <p>{item.name}</p>
          <p>${item.price} x {item.quantity}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
