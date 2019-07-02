import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="flex">
        <li>
          <NavLink exact to="/" activeClassName="active">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName="active">
            gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
            products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/b2b" activeClassName="active">
            b2b
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
