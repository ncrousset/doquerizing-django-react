import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Register from './pages/Register'
import Fotgot from './pages/Fotgot'
import ShoppingCart from "./pages/ShoppingCart.tsx";
import Checkout from "./pages/Checkout.tsx";
import OrderSummaries from "./pages/OrderSummaries.tsx";

const App: React.FC = () => { 
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fotgot" element={<Fotgot />} />
          <Route path="/s/:category" element={<Search />} />

          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-summaries" element={<OrderSummaries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App
