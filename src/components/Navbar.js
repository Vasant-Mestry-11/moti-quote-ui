import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="nav-container d-flex align-items-center">
      <NavLink className="logo-name" to="/">
        MQ
      </NavLink>
      <div className="ms-auto">
        <NavLink className="nav-item me-5" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item me-5" to="/all-quotes">
          Quote Of The Day
        </NavLink>
        <NavLink className="nav-item me-5" to="/search">
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
