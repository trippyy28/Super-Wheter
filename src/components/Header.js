import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Header = () => {
  const TEL_AVIV_KEY = 215854;
  const history = useHistory();
  return (
    <nav className="navbar">
      <a>
        <button className="btn-logo" disabled={true}>
          Super Whether
        </button>
      </a>
      <ul>
        <li>
          <button
            onClick={() => history.push(`/?cityKey=${TEL_AVIV_KEY}`)}
            className="btn btn-home"
          >
            Home
          </button>
        </li>

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
