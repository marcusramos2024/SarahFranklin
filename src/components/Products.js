// src/components/Products.js
import React from "react";
import ProductCard from "./ProductCard";

function Products({ products, activeFilter, handleFilter }) {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="filter-container">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          data-filter="all"
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === "tees" ? "active" : ""}`}
          data-filter="tees"
          onClick={() => handleFilter("tees")}
        >
          Tees
        </button>
        <button
          className={`filter-btn ${activeFilter === "shorts" ? "active" : ""}`}
          data-filter="shorts"
          onClick={() => handleFilter("shorts")}
        >
          Shorts
        </button>
        <button
          className={`filter-btn ${activeFilter === "hoodies" ? "active" : ""}`}
          data-filter="hoodies"
          onClick={() => handleFilter("hoodies")}
        >
          Hoodies
        </button>
      </div>

      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </div>
    </section>
  );
}

export default Products;
