import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import authImage from "../../../images/auth.png";
import Footer from "../../common/Footer";

const Login = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} className="d-md-block">
            <Container>
              <div>
                <div className="header-text my-5">
                  <h4 className="display-6" style={{ fontWeight: "bold" }}>
                    Login to continue
                  </h4>
                </div>
                <Form>
                  <Form.Group>
                    <Form.Control
                      className="mb-3"
                      type="text"
                      placeholder="Your email address"
                    />
                  </Form.Group>
                  <div className="d-grid gap-2 col-12">
                    <Button variant="dark">Login</Button>
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

export default Login;
