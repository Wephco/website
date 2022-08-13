import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/wephcoW.png";

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand m-2" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="d-flex">
          <p className="me-2 fw-bold">
            <a
              href="mailto:contact@wephco.com"
              style={{ textDecoration: "none", color: "black" }}
            >
              contact@wephco.com
            </a>
          </p>
          <p className="me-2 fw-bold">
            <a
              href="tel:+2349161246300"
              style={{ textDecoration: "none", color: "black" }}
            >
              +234 (916) 1246 300
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
