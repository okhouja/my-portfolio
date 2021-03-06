import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logoNav">OK</div>
      <div className="navBar">
        <Link to="/">
          <li>HOMEPAGE</li>
        </Link>
        <Link to="/myprojects">
          <li>MY PROJECTS</li>
        </Link>
        <Link to="/aboutme">
          <li>ABOUT ME</li>
        </Link>

        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </div>
    </div>
  );
};
export default Header;
