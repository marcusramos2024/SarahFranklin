// src/components/ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card" data-category={product.category}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <a href="#" className="buy-button">
        <i className="fas fa-shopping-cart"></i> Buy Now
      </a>
    </div>
  );
}

export default ProductCard;
