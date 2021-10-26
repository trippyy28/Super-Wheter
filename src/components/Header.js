import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <button className="btn-logo">Super Whether</button>
      </Link>
      <ul>
        <Link to="/">
          <li>
            <button className="btn btn-home">Home</button>
          </li>
        </Link>
        <Link to="/favorites">
          <li>
            <button className="btn btn-fav">Favorites</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
