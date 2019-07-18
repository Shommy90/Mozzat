import React from "react";

import b2bBg from "../../assets/images/b2b-bg.png";
import b2bTitle from "../../assets/images/b2b-title.png";
import phoneIcon from "../../assets/images/b2b-phone-icon.png";
import messageIcon from "../../assets/images/b2b-message-icon.png";

import { Link } from "react-router-dom";

const B2B = () => {
  return (
    <div className="b2b content">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${b2bBg})`, height: "550px" }}
      >
        <div className="dark-bg">
          <div
            className="header-title-holder flex flex-col align-center justify-end"
            style={{ paddingBottom: "150px" }}
          >
            <div style={{ display: "inline-block", marginBottom: "15px" }}>
              <img src={b2bTitle} alt="title" />
            </div>

            <p style={{ fontSize: "30px", color: "#fff" }}>
              Thank for reaching us our sales team would be happy to contact
            </p>
          </div>
        </div>
      </div>

      <div className="b2b-content">
        <div className="b2b-holder">
          <div className="b2b-box">
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "20px" }}>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ width: "60px", height: "55px" }}
                />
              </div>
              <p style={{ fontSize: "24px", fontWeight: "500" }}>
                Talk to Sales
              </p>
            </div>

            <p
              style={{
                marginBottom: "20px",
                fontSize: "20px",
                lineHeight: "26px",
                padding: "0 30px"
              }}
            >
              Interested for Mozzat? Just pick up the phone to talk with a
              member of our sales team.
            </p>

            <p className="b2b-number">+ 966 500 600 307</p>
          </div>

          <div className="b2b-box">
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "20px" }}>
                <img
                  src={messageIcon}
                  alt="phone"
                  style={{ width: "60px", height: "55px" }}
                />
              </div>
              <p style={{ fontSize: "24px", fontWeight: "500" }}>
                Contact Customer Support
              </p>
            </div>

            <p
              style={{
                marginBottom: "20px",
                fontSize: "20px",
                lineHeight: "26px",
                padding: "0 30px"
              }}
            >
              If you have some questions or need a little help. Don’t
              worry...we’re here for you!
            </p>

            <Link
              to="#"
              className="button"
              style={{ textTransform: "capitalize" }}
            >
              Send email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2B;
