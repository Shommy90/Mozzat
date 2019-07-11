import React from "react";
import productsSectionBg from "../../../assets/images/products-section-bg.png";
import productsTitle from "../../../assets/images/products-title.png";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <div
      className="products-section"
      style={{
        backgroundImage: `url(${productsSectionBg})`
      }}
    >
      <div className="products-carousel">
        <div className="container">
          <div
            className="flex justify-center"
            style={{ marginBottom: "50px", paddingTop: "150px" }}
          >
            <img
              src={productsTitle}
              style={{ width: "311px", height: "82px" }}
              alt="products title"
            />
          </div>

          <div className="carousel">CAROUSEL</div>

          <div className="flex justify-center" style={{ marginTop: "50px" }}>
            <Link
              to="/products"
              className="link-btn"
              style={{ color: "white", borderColor: "#fff" }}
            >
              see all products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
