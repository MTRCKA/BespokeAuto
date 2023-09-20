import React from 'react';

const Cart = ({ cartItems }) => (
  <div>
    {cartItems.map((item) => (
      <div key={item.id}>
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default Cart;