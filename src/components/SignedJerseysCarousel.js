// components/SignedJerseysCarousel.js
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const SignedJerseysCarousel = ({ products }) => {
  // Filter for signed jerseys and exclude purchased items.
  const jerseyProducts = products.filter(
    (product) => product.category === "jerseys" && product.purchased !== true
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 4 seconds.
  useEffect(() => {
    if (jerseyProducts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jerseyProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [jerseyProducts.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (jerseyProducts.length === 0) return null;

  return (
    <section id="signed-jerseys-carousel" className="carousel">
      <h2 className="luxury-heading"><span className="luxury-heading-span">Signed</span> Jerseys</h2>
      <div className="carousel-container">
        <div className="carousel-slider">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {jerseyProducts.map((product) => (
              <div className="carousel-item" key={product.id}>
                {/* Pass extra props so that the card shows a luxury style and only one image */}
                <ProductCard product={product} luxury={true} hideBackImage={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-dots">
        {jerseyProducts.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default SignedJerseysCarousel;
