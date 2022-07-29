import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Carousel } from "react-bootstrap";
import homepageHouse from "../../../images/homepage-house.png";
import trusted from "../../../images/trusted.svg";
import whyChoose from "../../../images/why-choose.svg";
import getAProperty from "../../../images/get-a-property.svg";
import client1 from "../../../images/client1.svg";
import client2 from "../../../images/client2.svg";
import client3 from "../../../images/client3.svg";
import Footer from "../../common/Footer";

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
              properties through Technology
            </h1>
            <p>
              Let us take the hassle of house hunting off your shoulder for a
              small fee
            </p>
            <Link to="/find-a-property">
              <Button variant="dark" size="lg">
                Find a property
              </Button>
            </Link>
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

      <div className="trusted-by mt-5">
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
        <div className="text-center mb-5">
          <h1 className="display-4" style={{ fontWeight: "bold" }}>
            What our clients say
          </h1>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src={client1} className="d-block w-100" alt="" height={450} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={client2} className="d-block w-100" alt="" height={450} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={client3} className="d-block w-100" alt="" height={450} />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Footer />
    </div>
  );
};
