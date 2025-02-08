// ProductCard.js
import React, { useState } from 'react';

function ProductCard({ product, luxury, hideBackImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation(); // Prevent opening the modal
    window.location.href = product.stripe_link;
  };

  return (
    <>
      {/* Product Card */}
      <div
        className={`product-card ${luxury ? 'luxury-card' : ''}`}
        onClick={handleCardClick}
        data-category={product.category}
      >
        {product.front_img_path && (
          <img
            src={`${process.env.REACT_APP_STORAGE_BUCKET_URL}${product.front_img_path}`}
            alt={product.title}
            className="front-image"
          />
        )}

        {/* Only show the back image if hideBackImage is false */}
        {!hideBackImage && product.back_img_path && (
          <img
            src={`${process.env.REACT_APP_STORAGE_BUCKET_URL}${product.back_img_path}`}
            alt={`${product.title} - back`}
            className="back-image hide"
          />
        )}

        <h3>{product.title}</h3>
        <p>${product.price}</p>

        {product.size && (
          <p>
            <strong>Size:</strong> {product.size}
          </p>
        )}

        <a href="#" className="buy-button" onClick={handleBuyNowClick}>
          <i className="fas fa-shopping-cart"></i> Buy Now
        </a>
      </div>

      {/* Modal (Popup) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="modal-images">
              <img
                src={`${process.env.REACT_APP_STORAGE_BUCKET_URL}${product.front_img_path}`}
                alt={product.title}
                className="front-image"
              />
              {!hideBackImage && product.back_img_path && (
                <img
                  src={`${process.env.REACT_APP_STORAGE_BUCKET_URL}${product.back_img_path}`}
                  alt={`${product.title} - back`}
                  className="back-image"
                />
              )}
            </div>
            <div className="modal-details">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              {product.size && (
                <p>
                  <strong>Size:</strong> {product.size}
                </p>
              )}
              {product.description && (
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
