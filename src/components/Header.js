import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logoNav">OK</div>
      <div className="navBar">
        <ul>
          <Link to="/home">
            <li>HOMEPAGE</li>
          </Link>
          <Link to="/myproject">
            <li>MY PROJECT</li>
          </Link>
          <Link to="/aboutme">
            <li>ABOUT ME</li>
          </Link>

          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
