import React from "react";
import { Link } from "react-router-dom";

import aboutBg from "../../assets/images/about-page-bg.png";
import aboutTitle from "../../assets/images/about-title.png";
import journeyBg from "../../assets/images/about-journey-bg.png";
import journeyLogo from "../../assets/images/journey-logo.png";
import mainProdLeft from "../../assets/images/main-prod-left.png";
import mainProdRight from "../../assets/images/main-prod-right.png";
import ourMainTitle from "../../assets/images/our-main-title.png";

const About = () => {
  return (
    <div className="about">
      <div
        className="about__header"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div style={{ background: "rgba(0,0,0, .7)", height: "100%" }}>
          <div style={{ paddingTop: "400px", textAlign: "center" }}>
            <img style={{ width: "auto" }} src={aboutTitle} alt="about-title" />
          </div>
        </div>
      </div>

      <div
        className="about-journey"
        style={{ backgroundImage: `url(${journeyBg})` }}
      >
        <div
          className="container flex align-center justify-between"
          style={{ padding: "0 100px" }}
        >
          <div style={{ padding: "0 30px" }}>
            <h2
              style={{
                fontSize: "58px",
                fontWeight: "500",
                marginBottom: "50px"
              }}
            >
              Our <span style={{ fontWeight: "600" }}>Journey</span>
            </h2>

            <p
              style={{
                fontSize: "34px",
                lineHeight: "40px",
                maxWidth: "840px",
                width: "100%"
              }}
            >
              Mozzat established in Saudi Arabia, Riyadh in 2018 and our
              objectives is to provide the best quality of local and imported
              meat and poultry in our shops. Our meats are carefully selected to
              reflect our choice and brand.
            </p>
          </div>

          <div>
            <img
              src={journeyLogo}
              alt="journey logo"
              style={{ width: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="about__main-products flex">
        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${mainProdLeft})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${mainProdRight})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div
            style={{ background: "rgba(0,0,0, .7)", height: "100%" }}
            className="flex align-center justify-center"
          >
            <div className="flex flex-col align-center">
              <img
                src={ourMainTitle}
                style={{ width: "auto", marginBottom: "10px" }}
              />

              <h2
                style={{
                  marginBottom: "30px",
                  fontSize: "46px",
                  fontWeight: "400",
                  color: "#fff"
                }}
              >
                MAIN <span style={{ fontWeight: "500" }}>PRODUCTS</span>
              </h2>

              <Link to="/products" className="button">
                buy now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
