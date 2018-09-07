import React from "react";
import "./Navbar.css";
const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        Score: {props.score}
      </li>
      <li className="nav-item">
        Highscore: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Navbar;
