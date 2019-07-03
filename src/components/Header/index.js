import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div className="header flex align-center">
      <div className="container flex justify-between align-center flex-wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <Navigation />
      </div>
    </div>
  );
};

export default Header;
