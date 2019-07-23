import React from "react";
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
import CategoryCarousel from "./CategoryCarousel";

import lampRack from "../../assets/images/lamb-rack-carousel.png";

const ProductsCarousel = () => {
  const dots = [
    { children: "lamb" },
    { children: "beef" },
    { children: "chicken" },
    { children: "bread" },
    { children: "vegetables" },
    { children: "accesories" }
  ];

  const slides = [
    {
      name: "Lamb Rack Australian",
      img: lampRack,
      price: "25,000",
      weight: "200g"
    },
    {
      name: "Lamb Rack Asian",
      img: lampRack,
      price: "25,000",
      weight: "200g"
    },
    {
      name: "Lamb Rack American",
      img: lampRack,
      price: "25,000",
      weight: "200g"
    },
    {
      name: "Lamb Rack Indian",
      img: lampRack,
      price: "25,000",
      weight: "200g"
    },
    {
      name: "Lamb Rack European",
      img: lampRack,
      price: "25,000",
      weight: "200g"
    }
  ];

  return (
    <div className="products-page-carousel">
      <CarouselProvider
        dragEnabled={false}
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={6}
      >
        <div className="carousel__dots-wrapper">
          {dots.map((dot, index) => (
            <Dot
              key={index}
              slide={index}
              children={dot.children}
              disabled={false}
            />
          ))}
        </div>
        <div className="carousel__wrapper">
          <Slider style={{ height: "500px" }}>
            {dots.map((dot, index) => (
              <Slide key={index} index={index}>
                <CategoryCarousel products={slides} />
              </Slide>
            ))}
          </Slider>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ProductsCarousel;
