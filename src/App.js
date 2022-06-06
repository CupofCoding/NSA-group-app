import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart.js'
import data from './data.js'
import { useState } from 'react';

function App() {
  const { products } = data;
  const [ items, setItems ] = useState([]);

  const addToCart = (product) => {
    const exist = items.find((x) => x.id === product.id)
    if (exist) {
      setItems(items.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
    } else {setItems([...items, {...product, qty: 1}])}
  };

  const removeFromCart = (product) => {
    const exist = items.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setItems(items.filter((x) => x.id !== product.id));
    } else {
      setItems(items.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
    }
  };

  const addToWishList = (product) => {
    const exist = items.find((x) => x.id === product.id)
    if (exist) {
      setItems(items.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
    } else {setItems([...items, {...product, qty: 1}])}
  };

  const removeFromWishList = (product) => {
    const exist = items.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setItems(items.filter((x) => x.id !== product.id));
    } else {
      setItems(items.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
    }
  };

  return (
    <div className="App">
      <Router>
        <header>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Cart'>Cart Page</Link>
              </li>
              <li>
                <Link to='/Wishlist'>Wishlist</Link>
              </li>
            </ul>
          </div>
        </header>

        <div>
          <Routes>
            <Route path='/' element={<Home addToCart={addToCart} addToWishList={addToWishList} products={products} />} />
            <Route path='/Cart' element={<Cart addToCart={addToCart} removeFromCart={removeFromCart} items={items} />} />
            <Route path='/Wishlist' element={<Wishlist items={items} addToWishList={addToWishList} removeFromWishList={removeFromWishList} />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
