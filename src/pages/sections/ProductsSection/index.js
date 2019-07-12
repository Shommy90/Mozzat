import React from "react";
import productsSectionBg from "../../../assets/images/products-section-bg.png";
import productsTitle from "../../../assets/images/products-title.png";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import lamb from "../../../assets/images/slider-lamb.png";
import beef from "../../../assets/images/slider-beef.png";
import chicken from "../../../assets/images/slider-chicken.png";
import bread from "../../../assets/images/slider-bread.png";
import vegetables from "../../../assets/images/slider-vegetables.png";
import accesories from "../../../assets/images/slider-accesories.png";

const ProductsSection = () => {
  const slides = [
    { img: lamb },
    { img: beef },
    { img: chicken },
    { img: bread },
    { img: vegetables },
    { img: accesories }
  ];

  const dots = [
    { children: "lamb" },
    { children: "beef" },
    { children: "chicken" },
    { children: "bread" },
    { children: "vegetables" },
    { children: "accesories" }
  ];

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

          <div className="carousel-wrap">
            <CarouselProvider
              dragEnabled={false}
              isPlaying={true}
              interval={4000}
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={6}
            >
              <div className="carousel__dots-wrapper">
                {dots.map((dot, index) => (
                  <Dot slide={index} children={dot.children} disabled={false} />
                ))}
              </div>
              <div className="carousel__wrapper">
                <Slider style={{ height: "600px" }}>
                  {slides.map((slide, index) => (
                    <Slide index={index}>
                      <img src={slide.img} alt={slide.img} />
                    </Slide>
                  ))}
                </Slider>
                <ButtonBack className="carousel-btn carousel-btn__back">
                  <i className="fas fa-angle-left" />
                </ButtonBack>
                <ButtonNext className="carousel-btn carousel-btn__next">
                  <i className="fas fa-angle-right" />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>

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
