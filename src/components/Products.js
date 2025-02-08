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
          className={`filter-btn ${activeFilter === "hats" ? "active" : ""}`}
          data-filter="hats"
          onClick={() => handleFilter("hats")}
        >
          Hats
        </button>
        <button
          className={`filter-btn ${activeFilter === "sweatshirts" ? "active" : ""}`}
          data-filter="sweatshirts"
          onClick={() => handleFilter("sweatshirts")}
        >
          Sweatshirts
        </button>
        <button
          className={`filter-btn ${activeFilter === "longsleeves" ? "active" : ""}`}
          data-filter="longsleeves"
          onClick={() => handleFilter("longsleeves")}
        >
          Long Sleeve Shirts
        </button>
        <button
          className={`filter-btn ${activeFilter === "tshirts" ? "active" : ""}`}
          data-filter="tshirts"
          onClick={() => handleFilter("tshirts")}
        >
          T-Shirts
        </button>
        <button
          className={`filter-btn ${activeFilter === "shorts" ? "active" : ""}`}
          data-filter="shorts"
          onClick={() => handleFilter("shorts")}
        >
          Shorts
        </button>
        <button
          className={`filter-btn ${activeFilter === "pants" ? "active" : ""}`}
          data-filter="pants"
          onClick={() => handleFilter("pants")}
        >
          Pants
        </button>
        <button
          className={`filter-btn ${activeFilter === "jerseys" ? "active" : ""}`}
          data-filter="jerseys"
          onClick={() => handleFilter("jerseys")}
        >
          Signed Jerseys
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
