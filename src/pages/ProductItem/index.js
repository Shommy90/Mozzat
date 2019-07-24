import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Socials from "../../components/Socials";
import { Link } from "react-router-dom";

import productItemBg from "../../assets/images/product-item-bg.png";
import productItem from "../../assets/images/product-item.png";
import productTitle from "../../assets/images/product-title.png";
import cartIcon from "../../assets/images/cart-icon.png";
import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master-card.png";
import arrowBackSmall from "../../assets/images/arrow-left-small.png";
import arrowNextSmall from "../../assets/images/arrow-right-small.png";

const ProductItem = props => {
  console.log("ProductItem: ", props);
  return (
    <div className="product-item content">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${productItemBg})` }}
      >
        <div className="dark-bg">
          <div className="header-title-holder">
            <div style={{ display: "inline-block" }}>
              <img src={productTitle} alt="title" />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex">
        <div className="product-item__left">
          <div className="product-item__img-holder">
            <img src={productItem} alt="product" />
          </div>

          <div className="prod-item__carousel-holder">
            <CarouselProvider
              dragEnabled={false}
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              visibleSlides={4}
              totalSlides={7}
            >
              <div>
                <Slider>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                  <Slide>
                    <Link to="/item">
                      <div className="prod-item-carousel__item">
                        <img src={productItem} alt="product item" />
                      </div>
                    </Link>
                  </Slide>
                </Slider>
                <ButtonBack
                  className="item-carousel__arrow left"
                  style={{ backgroundImage: `url(${arrowBackSmall})` }}
                />
                <ButtonNext
                  className="item-carousel__arrow right"
                  style={{ backgroundImage: `url(${arrowNextSmall})` }}
                />
              </div>
            </CarouselProvider>
          </div>
        </div>
        <div className="product-item__right">
          <h2 className="product-name">Lamb Rack Australian</h2>
          <p className="product-price">
            25,000 <span>ر.س</span>
          </p>
          <p className="product-piece">1 piece: 200g</p>

          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>

          <div className="flex align-center">
            <input className="product-input" type="number" value="1" />
            <button
              className="button flex align-center"
              style={{ textTransform: "none" }}
            >
              <span
                style={{ marginRight: "7px", width: "20px", height: "20px" }}
              >
                <img src={cartIcon} alt="cart" />
              </span>
              Add to cart
            </button>
          </div>

          <div className="flex align-center" style={{ margin: "35px 0" }}>
            <img
              src={visa}
              alt="card"
              style={{ marginRight: "5px", width: "auto" }}
            />
            <img src={masterCard} alt="card" style={{ width: "auto" }} />
          </div>

          <div>
            <p
              style={{
                marginLeft: "5px",
                marginBottom: "15px",
                fontSize: "22px",
                fontWeight: "500"
              }}
            >
              <span style={{ fontWeight: "700" }}>Follow us</span> on social
              networks
            </p>

            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
