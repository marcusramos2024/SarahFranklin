import React, { useState } from "react";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
    {
      id: 1,
      category: "tees",
      img: "images/placeholders/preformanceTee.jpg",
      name: "Performance Tee",
      price: "$29.99",
    },
    {
      id: 2,
      category: "shorts",
      img: "images/placeholders/runningShorts.avif",
      name: "Running Shorts",
      price: "$39.99",
    },
    {
      id: 3,
      category: "hoodies",
      img: "images/placeholders/trainingHoodie.avif",
      name: "Training Hoodie",
      price: "$49.99",
    },
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;
    return product.category === activeFilter;
  });

  return (
    <>
      <Navbar />
      <Hero />
      
      <Products
        products={filteredProducts}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />
      
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
