import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import homepageHouse from "../../../images/homepage-house.svg";
import trusted from "../../../images/trusted.svg";
import whyChoose from "../../../images/why-choose.svg";
import getAProperty from "../../../images/get-a-property.svg";
import clients from "../../../images/clients.svg";
import footer from "../../../images/footer.svg";
// import Footer from "../../common/Footer";

export const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} align="start">
            <h1 className="mt-5 display-4" style={{ fontWeight: "bold" }}>
              Buy, Rent or Sell
            </h1>
            <h1 className="display-4" style={{ fontWeight: "bold" }}>
              properties in Abuja
            </h1>
            <p>
              Let us take the hassle of house hunting off your shoulder for a
              small fee
            </p>
            <Button variant="dark" size="lg">
              Get Started
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <img
              src={homepageHouse}
              alt="House Map"
              width="100%"
              height={500}
            />
          </Col>
        </Row>
      </Container>

      <div classNAme="trusted-by mt-5">
        <div className="trusted-by-text text-center">
          <h4>Trusted By Reputable Nigerian Companies</h4>
        </div>
        <div className="trusted-by-image text-center">
          <img src={trusted} alt="Trusted By" width="100%" />
        </div>
      </div>

      <Container>
        <div className="my-3">
          <img src={whyChoose} alt="Why Choose Us" width="100%" />
        </div>
      </Container>

      <Container>
        <div className="mb-3">
          <img
            src={getAProperty}
            alt="Steps To Get A Property"
            width="100%"
            height={400}
          />
        </div>
      </Container>

      <Container>
        <div className="">
          <img src={clients} alt="Clients" width="100%" />
        </div>
      </Container>

      <div className="">
        <img src={footer} alt="Footer" width="100%" />
      </div>
    </div>
  );
};
