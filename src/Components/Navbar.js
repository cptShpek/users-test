import React from "react";
import {Link} from "react-router-dom";

const Navbar = function() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <span className="navbar-brand h1">Users App</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-user">Add User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;