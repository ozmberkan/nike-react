import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import History from "../components/History";
import Application from "../components/Application";

export default function Home({ data, shoes }) {
  return (
    <div>
      <Header shoes={shoes} />
      <History />
      <Products data={data} shoes={shoes} />
      <Application />
      <Footer />
    </div>
  );
}
