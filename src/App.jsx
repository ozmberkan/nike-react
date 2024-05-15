import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bestsellers from "./pages/Bestsellers";
import axios from "axios";
import Error from './components/Error'
import Allproducts from "./pages/Allproducts";


export default function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('/dist/db.json')
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
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
