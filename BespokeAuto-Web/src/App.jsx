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
      {/* <h1 className="text-3xl font-bold underline">Bespoke Auto</h1>
      <ProductList products={products} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
      <Cart cartItems={cartItems} /> */}
      <ProductPricing />
      {/* <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default App;