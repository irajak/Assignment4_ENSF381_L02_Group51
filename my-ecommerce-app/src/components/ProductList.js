import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products'; // Assuming the correct path is used

const ProductList = ({ addToCart }) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;