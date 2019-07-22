import React from "react";
import followUsImg from "../../assets/images/follow-us.png";
import Socials from "../Socials";

const Footer = () => {
  return (
    <div className="footer flex align-center">
      <div className="container-wide flex justify-between align-center">
        <p style={{ fontStyle: "italic", fontWeight: 300 }}>
          © 2019{" "}
          <span style={{ color: "#bc2631", fontWeight: 600, fontSize: 20 }}>
            MOZZAT
          </span>{" "}
          All Rights Reserved
        </p>

        <div className="footer-socials flex align-center">
          <div style={{ marginRight: 15 }}>
            <img src={followUsImg} alt="follow us" />
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
