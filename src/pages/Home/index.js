import React from "react";
import homeBg from "../../assets/images/header-bg1.jpg";
import homeLogo from "../../assets/images/logo-header.png";
import mozzatHome from "../../assets/images/Mozzat.png";
import recipesBg from "../../assets/images/recipes-bg.png";
import ourRecipes from "../../assets/images/our-recipes.png";
import aboutBg from "../../assets/images/about-bg.png";
import leftMeat from "../../assets/images/left-meat.png";
import rightMeat from "../../assets/images/right-meat.png";
import shopSectionBg from "../../assets/images/paralax-img.jpg";
import foodCollection from "../../assets/images/food-collection.png";
import contactSectionBg from "../../assets/images/contact-section-bg.png";
import anyQuestions from "../../assets/images/any-questions.png";

import ProductsSection from "../sections/ProductsSection";
import GallerySection from "../sections/GallerySection";

import { Link } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div className="home">
      <div
        className="home-section"
        style={{
          backgroundImage: `url(${homeBg})`
        }}
      >
        <div
          style={{ height: "100%", padding: "100px 0" }}
          className="flex justify-center align-center"
        >
          <div
            className="flex align-center"
            style={{ flexDirection: "column" }}
          >
            <div className="home-image-holder">
              <img src={homeLogo} alt="home logo" />
            </div>

            <div
              className="home-title-holder"
              style={{ maxWidth: "581px", width: "100%", height: "230px" }}
            >
              <img src={mozzatHome} alt="welcome" />
            </div>
          </div>
        </div>
      </div>

      <ProductsSection />

      <div
        className="recipes-section"
        style={{ backgroundImage: `url(${recipesBg})` }}
      >
        <div className="recipes-inner-bg">
          <div style={{ width: "111px", height: "55px", margin: "0 auto" }}>
            <img src={ourRecipes} alt="recipes" />
          </div>
          <h2
            className="section-title"
            style={{ textAlign: "center", color: "#fff" }}
          >
            recipes
          </h2>
        </div>
      </div>

      <GallerySection />

      <div
        className="about-section"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-section__inner">
          <div className="container flex align-center">
            <div className="about-section__inner--txt">
              <h4
                style={{
                  fontSize: "42px",
                  fontWeight: "500",
                  marginBottom: "40px",
                  textAlign: "center"
                }}
              >
                Few words <span style={{ fontWeight: "700" }}>about us</span>
              </h4>

              <p
                style={{
                  marginBottom: "80px",
                  fontSize: "30px",
                  lineHeight: "1.1em",
                  textAlign: "center"
                }}
              >
                Mozzat established in Saudi Arabia, Riyadh in 2018 and our
                objectives is to provide the best quality of local and imported
                meat and poultry in our shops. Our meats are carefully selected
                to reflect our choice and brand.
              </p>

              <Link
                to="/about"
                className="link-btn"
                style={{ margin: "0 auto" }}
              >
                read more
              </Link>
            </div>

            <div className="flex align-center about-section__inner--imgs">
              <div className="about-section__inner--imgs--left">
                <img src={leftMeat} alt="left meat" />
              </div>
              <div className="about-section__inner--imgs--right">
                <img src={rightMeat} alt="right meat" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="shop-section"
        style={{ backgroundImage: `url(${shopSectionBg})` }}
      >
        <div className="shop-section__inner">
          <div
            style={{
              maxWidth: "362px",
              width: "100%",
              height: "57px",
              margin: "0 auto"
            }}
          >
            <img src={foodCollection} alt="food collection" />
          </div>

          <h3 className="shop-section__title">
            SHOP OUR PERFECT MEAT <span style={{ fontWeight: "600" }}>NOW</span>
            !
          </h3>

          <Link
            to="/products"
            className="button"
            style={{ margin: "0 auto", marginTop: "30px" }}
          >
            buy now
          </Link>
        </div>
      </div>

      <GoogleMap />

      <div className="contact-section" style={{ background: "#191919" }}>
        <div
          style={{
            backgroundImage: `url(${contactSectionBg})`,
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            height: "100%",
            padding: "70px 0",
            minHeight: "590px"
          }}
        >
          <div
            style={{
              width: "270px",
              height: "58px",
              margin: "0 auto",
              marginBottom: "-15px"
            }}
          >
            <img src={anyQuestions} alt="any questions" />
          </div>
          <h3 className="contact-title">BE FREE AND CONTACT US</h3>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
