import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import Navigation from "../Navigation";
import MobileHeader from "../MobileHeader.js";

const Header = () => {
  return (
    <div>
      <div className="header flex align-center">
        <div className="container-wide flex justify-between align-center flex-wrap">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <Navigation />
        </div>
      </div>

      <MobileHeader />
    </div>
  );
};

export default Header;
