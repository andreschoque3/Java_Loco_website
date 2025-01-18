import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Locations">Locations</Link>
          </li>
          <li>
            <Link to="/Checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/#contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Join">Join Us</Link>
          </li>
          <Link to="/Login" className="log-btn">Login</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
