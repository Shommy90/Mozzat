import React from "react";
import { Link } from "react-router-dom";
import followUsImg from "../../assets/images/follow-us.png";

const Footer = () => {
  return (
    <div className="footer flex align-center">
      <div className="container flex justify-between align-center">
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

          <ul className="flex">
            <li>
              <Link to="">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fab fa-twitter" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
