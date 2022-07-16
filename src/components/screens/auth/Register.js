import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import authImage from "../../../images/auth.png";
import Footer from "../../common/Footer";
import { endpoints } from "../../../utils/URL";
import axios from "axios";

const Register = () => {
  const [localState, setLocalState] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (input) => (event) => {
    setLocalState({
      ...localState,
      [input]: event.target.value,
    });
  };

  const register = async () => {
    setLoading(true);
    try {
      const payload = {
        name: localState.name,
        phone: localState.phone,
        email: localState.email,
      };

      const response = await axios.post(endpoints.Auth.register, payload);

      if (response.status === 200) {
        // TODO: Implement successful login logic here.
      } else if (response.status === 400 || response.status === 401) {
        alert("Please check your input and try again.");
      } else {
        alert("Server Error. Please try again later");
      }
    } catch (error) {
      alert("Registration not available at the moment");
    } finally {
      setLoading(false);
    }
  };

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
                    <Form.Control
                      type="text"
                      placeholder="Your full name"
                      value={localState.name}
                      onChange={handleChange("name")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Your phone number"
                      value={localState.phone}
                      onChange={handleChange("phone")}
                    />
                    <Form.Text className="" style={{ fontWeight: "bold" }}>
                      Please provide an active phone number
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your email address"
                      value={localState.email}
                      onChange={handleChange("email")}
                    />
                  </Form.Group>
                  {loading ? (
                    <div class="spinner-border text-dark" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <div className="d-grid gap-2 col-12">
                      <Button onClick={register} variant="dark">
                        Register
                      </Button>
                    </div>
                  )}
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
