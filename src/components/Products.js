import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({
  products,
  activeFilter, // style/category filter, e.g. "hats", "sweatshirts", etc.
  handleFilter, // handler to update the active style filter
  activeSizeFilter = "all", // size filter, e.g. "L", "XL", etc.
  handleSizeFilter = () => {}
}) {
  // State to show/hide the filters modals
  const [showStyleFilters, setShowStyleFilters] = useState(false);
  const [showSizeFilters, setShowSizeFilters] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Whenever products or filters change, reset the page to 1.
  useEffect(() => {
    setCurrentPage(1);
  }, [products, activeFilter, activeSizeFilter]);

  // Define the desired category order for sorting purposes.
  const categoryOrder = [
    "hats",
    "sweatshirts",
    "longsleeves",
    "tshirts",
    "shorts",
    "pants",
    "jerseys"
  ];

  // ========= FILTERING LOGIC =========
  // Start with all products and then apply each filter if its value isn’t "all".
  let filteredProducts = [...products];

  if (activeFilter !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === activeFilter
    );
  }

  if (activeSizeFilter !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.size === activeSizeFilter
    );
  }

  // Always sort the filtered products by the defined category order.
  filteredProducts.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category);
    const bIndex = categoryOrder.indexOf(b.category);
    return aIndex - bIndex;
  });
  // ========= END FILTERING LOGIC =========

  // ========= PAGINATION =========
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handlers for pagination navigation.
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  // ========= END PAGINATION =========

  // ========= FILTER CLICK HANDLERS =========
  // When a style filter is clicked, update the activeFilter and close the modal.
  const onStyleFilterClick = (value) => {
    handleFilter(value);
    setShowStyleFilters(false);
  };

  // When a size filter is clicked, update the activeSizeFilter and close the modal.
  const onSizeFilterClick = (value) => {
    handleSizeFilter(value);
    setShowSizeFilters(false);
  };
  // ========= END FILTER HANDLERS =========

  return (
    <section id="products" className="products">
      <h2>Gear</h2>

      {/* Filter Trigger Buttons */}
      <div className="filter-buttons-container">
        <button
          className="open-filters-btn"
          onClick={() => setShowStyleFilters(true)}
        >
          <i className="fas fa-tshirt"></i> Sort By Type
        </button>
        <button
          className="open-filters-btn"
          onClick={() => setShowSizeFilters(true)}
        >
          <i className="fas fa-arrows-alt-h"></i> Sort By Size
        </button>
      </div>

      {/* ========= ACTIVE FILTERS VISUAL INDICATOR ========= */}
      {(activeFilter !== "all" || activeSizeFilter !== "all") && (
        <div className="active-filters">
          {activeFilter !== "all" && (
            <span className="active-filter">
              {activeFilter}
              <button
                onClick={() => handleFilter("all")}
                className="remove-filter"
              >
                &times;
              </button>
            </span>
          )}
          {activeSizeFilter !== "all" && (
            <span className="active-filter">
              {activeSizeFilter}
              <button
                onClick={() => handleSizeFilter("all")}
                className="remove-filter"
              >
                &times;
              </button>
            </span>
          )}
        </div>
      )}
      {/* ========= END ACTIVE FILTERS VISUAL ========= */}

      {/* ========= STYLE FILTERS MODAL ========= */}
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
              <h3>Filter by Type</h3>
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
      {/* ========= END STYLE FILTERS MODAL ========= */}

      {/* ========= SIZE FILTERS MODAL ========= */}
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
      {/* ========= END SIZE FILTERS MODAL ========= */}

      {/* ========= PRODUCT GRID ========= */}
      <div className="product-grid">
        {currentProducts.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </div>

      {/* ========= PAGINATION CONTROLS ========= */}
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
