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
              <img className="header-title-img" src={aboutTitle} alt="title" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="about-journey"
        style={{ backgroundImage: `url(${journeyBg})` }}
      >
        <div className="about-journey__inner">
          <div className="about-journey__inner--content container flex align-center justify-between">
            <div style={{ padding: "0 30px" }}>
              <h2 className="about-journey__title">
                Our <span style={{ fontWeight: "600" }}>Journey</span>
              </h2>

              <p className="about-journey__txt">
                Mozzat established in Saudi Arabia, Riyadh in 2018 and our
                objectives is to provide the best quality of local and imported
                meat and poultry in our shops. Our meats are carefully selected
                to reflect our choice and brand.
              </p>
            </div>

            <div className="about-journey__img-holder">
              <img src={journeyLogo} alt="journey logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="about__main-products flex">
        <div
          className="about__main-products--left"
          style={{
            backgroundImage: `url(${mainProdLeft})`
          }}
        />

        <div
          className="about__main-products--right"
          style={{
            backgroundImage: `url(${mainProdRight})`
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

              <h2 className="about__main-products-title">
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
          <div className="mobile-app__content container flex align-end">
            <div className="mobile-app__content--phones">
              <img src={appPhoneImg} alt="phones" />
            </div>

            <div className="mobile-app__content--txt flex flex-col justify-center align-center">
              <div>
                <img
                  className="coming-soon-title"
                  src={comingSoonTitle}
                  alt="soon title"
                />
              </div>

              <h2 className="mobile-app-title">
                MOZZAT <span style={{ fontWeight: "600" }}>MOBILE APP!</span>
              </h2>

              <div className="mobile-app__content--pin">
                <img
                  src={pin2}
                  alt="pin"
                  style={{ width: "auto", display: "block" }}
                />
              </div>

              <div className="flex аpp-links-holder">
                <Link
                  to="#"
                  className="mobile-app-bg apple"
                  style={{
                    display: "block",
                    backgroundImage: `url(${appStoreIcon})`
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
