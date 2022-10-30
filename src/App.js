import React from 'react';
import Navbar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SellProducts from "./components/pages/sellProduct";
import Register from "./components/pages/Register";
import Subscribers from "./components/pages/Subscribers";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/sell" element={<SellProducts/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/subscribers" element={<Subscribers/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;