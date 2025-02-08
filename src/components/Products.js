import React from "react";
import ProductCard from "./ProductCard";

function Products({ 
  products, 
  activeFilter, 
  handleFilter, 
  activeSizeFilter = "all", 
  handleSizeFilter = () => {} 
}) {
  return (
    <section id="products" className="products">
      <h2>Gear</h2>
      
      {/* Filter by Category */}
      <div className="filter-container">
        <h3>Filter by Category</h3>
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

      {/* Filter by Size */}
      <div className="filter-container">
        <h3>Filter by Size</h3>
        <button
          className={`filter-btn ${activeSizeFilter === "all" ? "active" : ""}`}
          data-filter="all"
          onClick={() => handleSizeFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "L" ? "active" : ""}`}
          data-filter="L"
          onClick={() => handleSizeFilter("L")}
        >
          L
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "L Tall" ? "active" : ""}`}
          data-filter="L Tall"
          onClick={() => handleSizeFilter("L Tall")}
        >
          L Tall
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "M/L" ? "active" : ""}`}
          data-filter="M/L"
          onClick={() => handleSizeFilter("M/L")}
        >
          M/L
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "XL" ? "active" : ""}`}
          data-filter="XL"
          onClick={() => handleSizeFilter("XL")}
        >
          XL
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "XL Tall" ? "active" : ""}`}
          data-filter="XL Tall"
          onClick={() => handleSizeFilter("XL Tall")}
        >
          XL Tall
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "XXL" ? "active" : ""}`}
          data-filter="XXL"
          onClick={() => handleSizeFilter("XXL")}
        >
          XXL
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "XXL Tall" ? "active" : ""}`}
          data-filter="XXL Tall"
          onClick={() => handleSizeFilter("XXL Tall")}
        >
          XXL Tall
        </button>
        <button
          className={`filter-btn ${activeSizeFilter === "2XL" ? "active" : ""}`}
          data-filter="2XL"
          onClick={() => handleSizeFilter("2XL")}
        >
          2XL
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
