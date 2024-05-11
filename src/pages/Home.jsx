import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
