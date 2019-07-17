import React from "react";
import GoogleMap from "../../components/GoogleMap";
import ContactForm from "../../components/ContactForm";
import Socials from "../../components/Socials";

import contactBg from "../../assets/images/contact-bg.png";
import contactTitle from "../../assets/images/contact-title.png";
import anyQuestions from "../../assets/images/any-questions.png";
import contactMapBg from "../../assets/images/contact-map-bg.png";

const Contact = () => {
  return (
    <div className="contact content">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="dark-bg">
          <div className="header-title-holder">
            <div style={{ display: "inline-block" }}>
              <img src={contactTitle} alt="title" />
            </div>
          </div>
        </div>
      </div>

      <GoogleMap />

      <div style={{ padding: "70px 0 100px" }}>
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
        <h3
          style={{
            fontSize: "36px",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "50px"
          }}
        >
          BE FREE AND CONTACT US
        </h3>

        <div
          className="contact-holder-bg"
          style={{ backgroundImage: `url(${contactMapBg})` }}
        >
          <div className="flex flex-col align-center justify-center">
            <div className="contact-socials">
              <Socials />
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
