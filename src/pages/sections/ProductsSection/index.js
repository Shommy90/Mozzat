import React from "react";
import productsSectionBg from "../../../assets/images/products-section-bg.png";
import productsTitle from "../../../assets/images/products-title.png";

const ProductsSection = () => {
  return (
    <div
      className="products-section"
      style={{
        backgroundImage: `url(${productsSectionBg})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "1200px"
      }}
    >
      <div className="products-carousel">
        <div className="container">
          <div className="flex justify-center" style={{ marginBottom: "50px" }}>
            <img
              src={productsTitle}
              style={{ width: "311px", height: "82px" }}
            />
          </div>

          <div className="carousel">CAROUSEL</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
