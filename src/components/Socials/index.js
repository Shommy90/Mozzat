import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="socials">
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
  );
};

export default Socials;
