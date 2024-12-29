import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card" data-category={product.category}>
      <img src={process.env.REACT_APP_STORAGE_BUCKET_URL + product.img_path} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <a href="#" className="buy-button">
        <i className="fas fa-shopping-cart"></i> Buy Now
      </a>
    </div>
  );
}

export default ProductCard;