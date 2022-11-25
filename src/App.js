import React from 'react';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Home page route */}
        <Route   path='/' element={<Home />} />
        {/* cart page route */}
        <Route   path='/cart' element={<Cart />} />
        {/* if another pages other than the two above is input redirect to home  page  using Navigate from react-router-dom */}
        <Route path='*' element={<Navigate replace to='/' />} />

        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
