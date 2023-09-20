import React from 'react';
import {StlViewer} from "react-stl-viewer";


const style = {
  top: 0,
  left: 0,
  width: '25vw',
  height: '25vh',
}

const ProductList = ({ products }) => (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <img src={product.image} style={style} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={() => window.location.href=`/product/${product.id}`}>View Product</button>
      </div>
    ))}
  </div>
);

export default ProductList;