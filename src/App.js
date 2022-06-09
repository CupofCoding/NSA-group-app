// <<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import ProductPage from './components/ProductPage'
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
        <navbar>
          <div className='logo'>
            <a><Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}} to='/'>Chips N Dip.</Link></a>
          </div>
          <div className='nav-links'>
            <a><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link></a>
            <a><Link style={{ textDecoration: 'none', color: 'white' }} to='/Cart'>Cart</Link></a>
            <a><Link style={{ textDecoration: 'none', color: 'white' }} to='/Wishlist'>Wishlist</Link></a>
          </div>
        </navbar>

        <div>
          <Routes>
            <Route path='/' element={<Home addToCart={addToCart} addToWishList={addToWishList} products={products} />} />
            <Route path='/Cart' element={<Cart addToCart={addToCart} removeFromCart={removeFromCart} items={items} />} />
            <Route path='/Wishlist' element={<Wishlist items={items} addToWishList={addToWishList} removeFromWishList={removeFromWishList} />} />
            <Route path='/ProductPage' element={<ProductPage products={products} />} />
          </Routes>
        </div>

      </Router>
{/* =======
import Header from './components/Header';
import Basket from './components/Summary';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';

function App() {
  const {products} =data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist =cartItems.find(x => x.id ===product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
    ); 
  } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
}
const onSubtract = (product) => {
  // minus 1.
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x)=>
      x.id === product.id ? {...exist, qty: exist.qty -1} :x)
    );
  }
}
const onRemove = (product ) => {
  // edit to remove all
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((x)=>
      x.id === product.id ? {...exist, qty: exist.qty -1} :x)
    );
  }
}
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
    <div className='row'>
   <Main 
   onAdd = {onAdd}
   products = {products}></Main>
    <Basket 
    onAdd ={onAdd}  
    onRemove ={onRemove}
    cartItems = {cartItems}>
    </Basket>
    </div>
>>>>>>> origin/big-bang*/}
    </div>
  );
} 

export default App;
