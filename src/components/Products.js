import React from "react";
import ProductCard from "./ProductCard";

function Products({ products, activeFilter, handleFilter }) {
  return (
    <section id="products" className="products">
      <h2>Gear</h2>
      <div className="filter-container">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          data-filter="all"
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === "shirts" ? "active" : ""}`}
          data-filter="shirts"
          onClick={() => handleFilter("shirts")}
        >
          Shirts
        </button>
        <button
          className={`filter-btn ${activeFilter === "hats" ? "active" : ""}`}
          data-filter="hats"
          onClick={() => handleFilter("hats")}
        >
          Hats
        </button>
        <button
          className={`filter-btn ${activeFilter === "hats" ? "active" : ""}`}
          data-filter="hats"
          onClick={() => handleFilter("pants")}
        >
          Pants
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
