import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

class MobileHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  handleStateChange = state => {
    this.setState({ isMenuOpen: state.isOpen });
    console.log("link clicked", this.state.isMenuOpen);
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <div className="mobile-header">
        <div className="mobile-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Menu
          isOpen={this.state.isMenuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <ul className="mobile-nav-list">
            <li>
              <NavLink
                onClick={() => this.closeMenu()}
                exact
                to="/"
                activeClassName="active"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => this.closeMenu()}
                to="/about"
                activeClassName="active"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => this.closeMenu()}
                to="/gallery"
                activeClassName="active"
              >
                gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => this.closeMenu()}
                to="/products"
                activeClassName="active"
              >
                products
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => this.closeMenu()}
                to="/contact"
                activeClassName="active"
              >
                contact
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => this.closeMenu()}
                to="/b2b"
                activeClassName="active"
              >
                b2b
              </NavLink>
            </li>
          </ul>
        </Menu>
      </div>
    );
  }
}

export default MobileHeader;
