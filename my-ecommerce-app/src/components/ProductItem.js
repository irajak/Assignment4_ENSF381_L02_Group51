import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="product-item" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        {hover && <p>{product.description}</p>}
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;