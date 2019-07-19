import React from "react";
import { Link } from "react-router-dom";

import aboutBg from "../../assets/images/about-page-bg.png";
import aboutTitle from "../../assets/images/about-title.png";
import journeyBg from "../../assets/images/about-journey-bg.png";
import journeyLogo from "../../assets/images/journey-logo.png";
import mainProdLeft from "../../assets/images/main-prod-left.png";
import mainProdRight from "../../assets/images/main-prod-right.png";
import ourMainTitle from "../../assets/images/our-main-title.png";
import mobileAppBg from "../../assets/images/mobile-app-bg.png";
import appPhoneImg from "../../assets/images/app-phone-img.png";
import comingSoonTitle from "../../assets/images/coming-soon-title.png";
import pin2 from "../../assets/images/pin2.png";
import appStoreIcon from "../../assets/images/app-store-icon.png";
import googlePlayIcon from "../../assets/images/google-play-icon.png";
import Newsletter from "../../components/Newsletter";

const About = () => {
  return (
    <div className="about">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="dark-bg">
          <div className="header-title-holder">
            <div style={{ display: "inline-block" }}>
              <img src={aboutTitle} alt="title" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="about-journey"
        style={{ backgroundImage: `url(${journeyBg})` }}
      >
        <div
          style={{
            height: "100%",
            background: "rgba(255,255,255, .8)",
            padding: "90px 0"
          }}
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
                meat and poultry in our shops. Our meats are carefully selected
                to reflect our choice and brand.
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
                alt="title"
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

      <Newsletter />

      <div
        className="mobile-app"
        style={{
          backgroundImage: `url(${mobileAppBg})`
        }}
      >
        <div style={{ background: "rgba(0,0,0, .8)", height: "100%" }}>
          <div className="container flex align-end" style={{ height: "100%" }}>
            <div
              style={{ marginRight: "100px", maxWidth: "450px", width: "100%" }}
            >
              <img src={appPhoneImg} alt="phones" />
            </div>

            <div
              className="flex flex-col justify-center align-center"
              style={{ paddingBottom: "140px" }}
            >
              <div>
                <img
                  src={comingSoonTitle}
                  alt="soon title"
                  style={{ width: "auto", marginBottom: "-15px" }}
                />
              </div>

              <h2
                style={{ fontSize: "46px", fontWeight: "500", color: "#fff" }}
              >
                MOZZAT <span style={{ fontWeight: "600" }}>MOBILE APP!</span>
              </h2>

              <div style={{ margin: "40px 0" }}>
                <img
                  src={pin2}
                  alt="pin"
                  style={{ width: "auto", display: "block" }}
                />
              </div>

              <div className="flex">
                <Link
                  to="#"
                  className="mobile-app-bg"
                  style={{
                    display: "block",
                    backgroundImage: `url(${appStoreIcon})`,
                    marginRight: "25px"
                  }}
                />
                <Link
                  to="#"
                  className="mobile-app-bg"
                  style={{
                    display: "block",
                    backgroundImage: `url(${googlePlayIcon})`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
