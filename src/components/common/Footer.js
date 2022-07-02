import React from "react";
import { Navbar } from "react-bootstrap";
import footer from "../../images/footer.svg";

const Footer = () => {
  return (
    <Navbar sticky="bottom">
      <img src={footer} alt="Footer" width="100%" />
    </Navbar>
  );
};

export default Footer;
