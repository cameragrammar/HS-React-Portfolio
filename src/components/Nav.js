import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav className="nav-container">
      {
        <ul>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Resume">RESUME</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/Portfolio">PORTFOLIO</Link>
          </li>
        </ul>
      }
    </nav>
  );
}

export default Nav;
