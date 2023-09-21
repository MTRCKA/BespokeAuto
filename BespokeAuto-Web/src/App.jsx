import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import ProductPricing from './components/ProductPricing';

function App() {
  const [products, setProducts] = useState([
    {id:1, name: "RS Grille,", description: "Custom 3d printed Grille for a 70-73 camaro", image:"../src/assets/RS_grille.jpg"}
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <ProductPricing />
    </div>
  );
}

export default App;