import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../images/logo.svg";

export const TopNav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="wephco" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text className="fw-bold">
            Wephco Admin Management Dashboard
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
