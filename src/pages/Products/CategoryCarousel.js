import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Link } from "react-router-dom";

import arrowBack from "../../assets/images/arrow-left.png";
import arrowNext from "../../assets/images/arrow-right.png";

const CategoryCarousel = props => {
  console.log("CategoryCarousel: ", props);
  return (
    <div>
      <CarouselProvider
        dragEnabled={false}
        naturalSlideWidth={100}
        naturalSlideHeight={700}
        totalSlides={5}
        visibleSlides={4}
      >
        <div className="category-carousel__wrapper">
          <Slider style={{ height: "500px" }}>
            {props.products.map((product, index) => (
              <Slide key={index} index={index}>
                <Link to="/item">
                  <div className="prod-carousel-item">
                    <div className="prod-carousel-item__img">
                      <img src={product.img} alt="product item" />
                    </div>

                    <div style={{ paddingTop: "10px" }}>
                      <p className="prod-carousel-item__name">{product.name}</p>
                      <p className="prod-carousel-item__piece">
                        1 piece: {product.weight}
                      </p>
                      <p className="prod-carousel-item__price">
                        {product.price}
                        <span style={{ fontSize: "22px" }}>ر.س</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </Slide>
            ))}
          </Slider>
          <ButtonBack
            className="carousel-arrow arrow-back"
            style={{ backgroundImage: `url(${arrowBack})` }}
          />
          <ButtonNext
            className="carousel-arrow arrow-next"
            style={{ backgroundImage: `url(${arrowNext})` }}
          />
        </div>
      </CarouselProvider>
    </div>
  );
};

export default CategoryCarousel;
