import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({
  products,
  activeFilter,
  handleFilter,
  activeSizeFilter = "all",
  handleSizeFilter = () => {}
}) {
  const [showStyleFilters, setShowStyleFilters] = useState(false);
  const [showSizeFilters, setShowSizeFilters] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Whenever the products or filters change, reset the page to 1.
  useEffect(() => {
    setCurrentPage(1);
  }, [products, activeFilter, activeSizeFilter]);

  // Apply filtering based on the active filter selections.
  let filteredProducts = products;

  if (activeFilter !== "all") {
    // If a style filter is active, show only that style.
    filteredProducts = products.filter(product => product.style === activeFilter);
  } else if (activeSizeFilter !== "all") {
    // If a size filter is active (and no style filter), show only products of that size.
    filteredProducts = products.filter(product => product.size === activeSizeFilter);
  } else {
    // Both filters are "all" – sort the products in a custom order.
    // Adjust the order below as desired.
    const styleOrder = [
      "tshirts",
      "longsleeves",
      "sweatshirts",
      "hats",
      "shorts",
      "pants",
      "jerseys"
    ];
    filteredProducts = [...products].sort((a, b) => {
      return styleOrder.indexOf(a.style) - styleOrder.indexOf(b.style);
    });
  }

  // Calculate pagination variables.
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Filtering handlers: When one filter is clicked, reset the other to "all".
  const onStyleFilterClick = (value) => {
    handleFilter(value);
    handleSizeFilter("all");
    setShowStyleFilters(false);
  };

  const onSizeFilterClick = (value) => {
    handleSizeFilter(value);
    handleFilter("all");
    setShowSizeFilters(false);
  };

  return (
    <section id="products" className="products">
      <h2>Gear</h2>

      {/* Filter Trigger Buttons */}
      <div className="filter-buttons-container">
        <button
          className="open-filters-btn"
          onClick={() => setShowStyleFilters(true)}
        >
          <i className="fas fa-tshirt"></i> Sort By Article
        </button>
        <button
          className="open-filters-btn"
          onClick={() => setShowSizeFilters(true)}
        >
          <i className="fas fa-arrows-alt-h"></i> Sort By Size
        </button>
      </div>

      {/* Style Filters Modal */}
      {showStyleFilters && (
        <div className="filters-modal">
          <div className="filters-panel">
            <button
              className="close-filters-btn"
              onClick={() => setShowStyleFilters(false)}
            >
              &times;
            </button>
            <div className="filter-section">
              <h3>Filter by Style</h3>
              <button
                className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("all")}
              >
                All
              </button>
              <button
                className={`filter-btn ${activeFilter === "hats" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("hats")}
              >
                Hats
              </button>
              <button
                className={`filter-btn ${activeFilter === "sweatshirts" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("sweatshirts")}
              >
                Sweatshirts
              </button>
              <button
                className={`filter-btn ${activeFilter === "longsleeves" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("longsleeves")}
              >
                Long Sleeve Shirts
              </button>
              <button
                className={`filter-btn ${activeFilter === "tshirts" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("tshirts")}
              >
                T‑Shirts
              </button>
              <button
                className={`filter-btn ${activeFilter === "shorts" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("shorts")}
              >
                Shorts
              </button>
              <button
                className={`filter-btn ${activeFilter === "pants" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("pants")}
              >
                Pants
              </button>
              <button
                className={`filter-btn ${activeFilter === "jerseys" ? "active" : ""}`}
                onClick={() => onStyleFilterClick("jerseys")}
              >
                Signed Jerseys
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Size Filters Modal */}
      {showSizeFilters && (
        <div className="filters-modal">
          <div className="filters-panel">
            <button
              className="close-filters-btn"
              onClick={() => setShowSizeFilters(false)}
            >
              &times;
            </button>
            <div className="filter-section">
              <h3>Filter by Size</h3>
              <button
                className={`filter-btn ${activeSizeFilter === "all" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("all")}
              >
                All
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "L" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("L")}
              >
                L
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "L Tall" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("L Tall")}
              >
                L Tall
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "M/L" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("M/L")}
              >
                M/L
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "XL" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("XL")}
              >
                XL
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "XL Tall" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("XL Tall")}
              >
                XL Tall
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "XXL" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("XXL")}
              >
                XXL
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "XXL Tall" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("XXL Tall")}
              >
                XXL Tall
              </button>
              <button
                className={`filter-btn ${activeSizeFilter === "2XL" ? "active" : ""}`}
                onClick={() => onSizeFilterClick("2XL")}
              >
                2XL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="product-grid">
        {currentProducts.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </div>

      {/* Pagination Controls with Arrow Icons */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
