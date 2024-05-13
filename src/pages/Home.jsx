import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import History from "../components/History";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <History />
      <Products />
      <Footer />
    </div>
  );
}
