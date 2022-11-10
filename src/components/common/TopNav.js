// import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";

export const TopNav = () => {
  // const { appState } = useContext(AppContext);

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
          {/* {appState.isAuthenticated ? (
            <Nav>
              <Nav.Item className="mx-2 my-1">
                {sessionStorage.getItem("name")}
              </Nav.Item>
              <Nav.Item className="mx-2 my-1">
                {sessionStorage.getItem("email")}
              </Nav.Item>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Item className="mx-2 my-1">
                <Link to="/login">
                  <Button variant="outline-dark">Log in</Button>
                </Link>
              </Nav.Item>
              <Nav.Item className="mx-2 my-1">
                <Link to="/register">
                  <Button variant="dark">Get started</Button>
                </Link>
              </Nav.Item>
            </Nav>
          )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
