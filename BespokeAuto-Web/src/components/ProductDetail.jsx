import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [email, setEmail] = useState('');

  const handlePreorder = () => {
    // Handle preorder
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email for preorder' />
      <button onClick={handlePreorder}>Preorder</button>
    </div>
  );
};

export default ProductDetail;