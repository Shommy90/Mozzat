import React from "react";
import GoogleMap from "../../components/GoogleMap";

import contactBg from "../../assets/images/contact-bg.png";
import contactTitle from "../../assets/images/contact-title.png";

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

      <div style={{ padding: "90px 0 130px" }}>
        <div className="contact-wrapper">contact</div>
      </div>
    </div>
  );
};

export default Contact;
