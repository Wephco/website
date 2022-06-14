import React from "react";
import { Stack, Container } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#FBFBFB" }}>
      <div className="m-5 p-5">
        <Container>
          <Stack direction="horizontal" gap={2}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="ms-auto" style={{ fontWeight: "bold" }}>
              contact@wephco.com
            </div>
            <div style={{ fontWeight: "bold" }}>+234 (814) 7511 481</div>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
