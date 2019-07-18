import React from "react";

import productItemBg from "../../assets/images/product-item-bg.png";

const ProductItem = () => {
  return (
    <div className="product-item content">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${productItemBg})` }}
      >
        <div className="dark-bg">
          <div
            className="header-title-holder"
            style={{ paddingBottom: "70px" }}
          >
            <div style={{ display: "inline-block" }}>
              {/* <img src={productsTitle} alt="title" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "55px 0" }}>
        product item
      </div>
    </div>
  );
};

export default ProductItem;
