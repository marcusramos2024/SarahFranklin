import React, { useState, useEffect } from "react";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("Sarah Franklin")
        .select("*");

      if (error) {
        throw error;
      }

      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;
    return product.category === activeFilter;
  });

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
