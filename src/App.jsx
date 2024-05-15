import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bestsellers from "./pages/Bestsellers";
import axios from "axios";
import Allproducts from "./pages/Allproducts";


export default function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(
        {
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: '/dist/Shoes-CWD2kgmM.png',
          category: 'electronic'
        }
      )
    })
      .then((response) => {
        setData(response.data);
      })
  }, [])


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/bestsellers" element={<Bestsellers data={data} />} />
        <Route path="/allproducts" element={<Allproducts data={data} />} />
      </Routes>
    </Router>
  );
}
