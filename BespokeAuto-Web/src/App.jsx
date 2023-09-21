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
      <h1 className="mx-auto max-w-7xl mb-1 my-6 text-5xl font-extrabold text-black-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-red-800">Bespoke Auto</span></h1>
      <hr></hr>
      <ProductPricing />
    </div>
  );
}

export default App;