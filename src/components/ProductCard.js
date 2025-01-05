import React, { useState } from 'react';

function ProductCard({ product }) {
  // Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal on card click
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  // Close modal on background or X click
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Buy Now redirect
  const handleBuyNowClick = (e) => {
    e.stopPropagation(); // Prevent opening the modal
    window.location.href = 'https://google.com';
  };

  return (
    <>
      {/* Product Card */}
      <div className="product-card" onClick={handleCardClick} data-category={product.category}>
      
      {product.front_img_path && (
        <img
          src={`${process.env.REACT_APP_STORAGE_BUCKET_URL}${product.front_img_path}`}
        />
      )}

        <h3>{product.name}</h3>
        <p>${product.price}</p>

        <a href="#" className="buy-button" onClick={handleBuyNowClick}>
          <i className="fas fa-shopping-cart"></i> Buy Now
        </a>
      </div>

      {/* Modal (Popup) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          {/* Stop propagation so clicking in the modal content doesn't close it */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="modal-images">
              <img
                src={process.env.REACT_APP_STORAGE_BUCKET_URL + product.front_img_path}
                alt={product.name}
              />
            {product.back_img_path && (
              <img
                src={`${process.env.REACT_APP_STORAGE_BUCKET_URL}${product.back_img_path}`}
              />
            )}
            </div>
            <div className="modal-details">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              
              {product.size &&(
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
