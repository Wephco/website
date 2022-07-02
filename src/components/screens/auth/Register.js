import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import authImage from "../../../images/auth.png";
import Footer from "../../common/Footer";

const Register = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} className="d-md-block">
            <Container>
              <div>
                <div className="header-text my-5">
                  <h3 className="" style={{ fontWeight: "bold" }}>
                    Create an account to get started
                  </h3>
                </div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Your full name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Your phone number"
                    />
                    <Form.Text className="" style={{ fontWeight: "bold" }}>
                      Please provide an active phone number
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your email address"
                    />
                  </Form.Group>
                  <div className="d-grid gap-2 col-12">
                    <Button variant="dark">Register</Button>
                  </div>
                </Form>
              </div>
            </Container>
          </Col>
          <Col sm={0} md={6} className="d-none d-sm-none d-md-block">
            <div>
              <img src={authImage} alt="Auth" width="100%" height={500} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
