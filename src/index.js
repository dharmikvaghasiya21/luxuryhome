import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Contect from './Contect';
import Popup from './Popup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Popup />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Product />} />
        <Route path='/Electronics' element={<Product />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/Featured' element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

