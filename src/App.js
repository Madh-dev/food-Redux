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
        <Route   path='/' element={<Home />} />
        <Route   path='/cart' element={<Cart />} />
        <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
