import React from 'react';

const ProductList = ({ products }) => (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={() => window.location.href=`/product/${product.id}`}>View Product</button>
      </div>
    ))}
  </div>
);

export default ProductList;