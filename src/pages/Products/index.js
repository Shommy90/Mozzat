import React from "react";

import productsBg from "../../assets/images/products-bg.png";
import productsTitle from "../../assets/images/products-title.png";
import serviceBg from "../../assets/images/paralax-img.jpg";
import deliveryIcon from "../../assets/images/delivery-icon.png";
import checkoutIcon from "../../assets/images/checkout-icon.png";
import memberIcon from "../../assets/images/member-icon.png";

import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import ProducstCarousel from "./ProductsCarousel";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false
    };
  }

  componentDidMount() {
    // fetch("http://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => console.log(data));
    console.log(this.state.products);
  }

  render() {
    return (
      <div className="products content">
        <div
          className="page-header"
          style={{ backgroundImage: `url(${productsBg})` }}
        >
          <div className="dark-bg">
            <div
              className="header-title-holder"
              style={{ paddingBottom: "70px" }}
            >
              <div style={{ display: "inline-block" }}>
                <img src={productsTitle} alt="title" />
              </div>
            </div>
          </div>
        </div>

        <div className="products-content" style={{ padding: "75px 0" }}>
          <div className="container">
            <ProducstCarousel products={this.state.products} />
          </div>
        </div>

        <div
          className="products-service"
          style={{
            backgroundImage: `url(${serviceBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        >
          <div
            style={{
              height: "100%",
              background: "rgba(0,0,0, .7)",
              padding: "140px 0"
            }}
          >
            <div
              className="flex justify-between align-center"
              style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}
            >
              <div
                className="service-box"
                style={{ padding: "0 20px", textAlign: "center" }}
              >
                <div style={{ marginBottom: "25px" }}>
                  <img
                    src={deliveryIcon}
                    alt="service icon"
                    style={{ width: "95px", height: "95px" }}
                  />
                </div>

                <p style={{ fontSize: "22px", color: "#fff" }}>
                  FAST <span style={{ fontWeight: "500" }}>DELIVERY</span>
                </p>
              </div>
              <div
                className="service-box"
                style={{ padding: "0 20px", textAlign: "center" }}
              >
                <div style={{ marginBottom: "25px" }}>
                  <img
                    src={checkoutIcon}
                    alt="service icon"
                    style={{ width: "95px", height: "95px" }}
                  />
                </div>

                <p style={{ fontSize: "22px", color: "#fff" }}>
                  SECURE <span style={{ fontWeight: "500" }}>CHECKOUT</span>
                </p>
              </div>
              <div
                className="service-box"
                style={{ padding: "0 20px", textAlign: "center" }}
              >
                <div style={{ marginBottom: "25px" }}>
                  <img
                    src={memberIcon}
                    alt="service icon"
                    style={{ width: "95px", height: "95px" }}
                  />
                </div>

                <p style={{ fontSize: "22px", color: "#fff" }}>
                  MEMBER <span style={{ fontWeight: "500" }}>DISCOUNT</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </div>
    );
  }
}

export default Products;
