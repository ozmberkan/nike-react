import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bestsellers from "./pages/Bestsellers";
import Error from './components/Error'
import Allproducts from "./pages/Allproducts";
import shoes from './db.js';

export default function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/bestsellers" element={<Bestsellers shoes={shoes} />} />
        <Route path="/allproducts" element={<Allproducts shoes={shoes} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
