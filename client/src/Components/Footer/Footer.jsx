import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Footer.css';

function Footer() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Scroll to the top if there's no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="footer">
      <div className="container">
        <div className="top">
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
            </ul>
          </nav>
        </div>
        <div className="bottom">
          <div className="social-brands">
            <a href="https://facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="https://tiktok.com"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <div className="copyright">
            <p>© 2024 Java Loco. All rights reserved.</p>
          </div>
          <div className="terms">
            <p>Terms & Conditions</p>
            <p>Return Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
