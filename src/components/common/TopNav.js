import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="mx-5 my-1">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to="/exclusive-offers"
              >
                Exclusive Offers
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-5 my-1">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to="/diaspora-plans"
              >
                Diaspora Plans
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-5 my-1">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to="/contact-us"
              >
                Consult Us
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
