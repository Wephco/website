import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import exclusiveHotel from "../../../images/exclusive-hotel.png";
import exclusiveMeeting from "../../../images/exclusive-meeting.png";
import exclusiveOffice from "../../../images/exclusive-office.png";
import exclusiveProperty from "../../../images/exclusive-property.png";
import exclusiveEvent from "../../../images/exclusive-event.png";
import exclusiveShortlet from "../../../images/exclusive-shortlet.png";

const Landing = () => {
  return (
    <Container>
      <div className="header mt-5 text-center">
        <h4
          className="display-4"
          style={{
            fontWeight: "bold",
          }}
        >
          Our Exclusive Offers
        </h4>
      </div>
      <div className="offers">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-sm-6 mt-2">
            <Row>
              <Col sm={12} md={4}>
                <Link
                  to="/hotel-reservation"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Card className="text-center my-2" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={exclusiveHotel}
                      width="15rem"
                      height="200rem"
                    />
                    <Card.Footer>Hotel Resevation</Card.Footer>
                  </Card>
                </Link>
              </Col>
              <Col sm={12} md={4}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Card className="text-center my-2" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={exclusiveMeeting}
                      width="15rem"
                      height="200rem"
                    />
                    <Card.Footer>Meeting Room</Card.Footer>
                  </Card>
                </Link>
              </Col>
              <Col sm={12} md={4}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Card className="text-center my-2" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={exclusiveOffice}
                      width="15rem"
                      height="200rem"
                    />
                    <Card.Footer>Office Space</Card.Footer>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Card className="text-center my-2" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={exclusiveProperty}
                      width="15rem"
                      height="200rem"
                    />
                    <Card.Footer>Property Management</Card.Footer>
                  </Card>
                </Link>
              </Col>
              <Col sm={12} md={4}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Card className="text-center my-2" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={exclusiveEvent}
                      width="15rem"
                      height="200rem"
                    />
                    <Card.Footer>Event/Hall Booking</Card.Footer>
                  </Card>
                </Link>
              </Col>
              <Col sm={12} md={4}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Card className="text-center my-2" style={{ width: "16rem" }}>
                    <Card.Img
                      variant="top"
                      src={exclusiveShortlet}
                      width="15rem"
                      height="200rem"
                    />
                    <Card.Footer>Shortlets/Apartment</Card.Footer>
                  </Card>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
