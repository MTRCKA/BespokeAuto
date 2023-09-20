import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <ProductList products={products} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;