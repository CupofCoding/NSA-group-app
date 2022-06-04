import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart.js'

function App() {
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
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Wishlist' element={<Wishlist />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
