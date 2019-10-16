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

      <div className="contact-wrapper">
        <div className="any-questions">
          <img src={anyQuestions} alt="any questions" />
        </div>
        <h3
          className="be-free-title"
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
