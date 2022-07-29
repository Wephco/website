import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Card } from "react-bootstrap";
import authImage from "../../../images/auth.png";
import Footer from "../../common/Footer";
import { endpoints } from "../../../utils/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [localState, setLocalState] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const [paymentPlan, setPaymentPlan] = useState("");

  const handleChange = (input) => (event) => {
    setLocalState({
      ...localState,
      [input]: event.target.value,
    });
  };

  const register = async () => {
    if (paymentPlan === "") {
      alert("Please click on the cards to choose a payment plan");
      return;
    }
    if (
      localState.email === "" ||
      localState.name === "" ||
      localState.phone === ""
    ) {
      alert("Please fill the form to continue");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: localState.name,
        phone: localState.phone,
        email: localState.email,
        paymentPlan: paymentPlan,
      };

      const response = await axios.post(endpoints.Auth.register, payload);

      if (response.status === 200) {
        navigate("/login");
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

  const selectPaymentPlan = (plan) => {
    setPaymentPlan(plan);
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
                  <Form.Group className="mb-5">
                    <h3 className="text-center">Payment Plans</h3>
                    <Row>
                      <Col className="my-2" sm={12} md={6}>
                        <Card
                          bg={paymentPlan === "Basic" ? "info" : ""}
                          text={paymentPlan === "Basic" ? "white" : "dark"}
                          className="text-center"
                          onClick={() => selectPaymentPlan("Basic")}
                        >
                          <Card.Header>BASIC</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              <ul>
                                <li>1% Service Charge</li>
                                <li>Maximum of 3 Properties</li>
                                <li>
                                  You will be linked with the agent in-charge of
                                  the house
                                </li>
                                <li>Inspection fees would be paid</li>
                                <li>We won't be present during inspections</li>
                              </ul>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col className="my-2" sm={12} md={6}>
                        <Card
                          bg={paymentPlan === "Classic" ? "info" : ""}
                          text={paymentPlan === "Classic" ? "white" : "dark"}
                          className="text-center"
                          onClick={() => selectPaymentPlan("Classic")}
                        >
                          <Card.Header>CLASSIC</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              <ul>
                                <li>2% Service Charge</li>
                                <li>Maximum of 7 Properties</li>
                                <li>
                                  Wephco will be fully involved with the agent
                                  to secure the house
                                </li>
                                <li>No Inspection fee</li>
                                <li>
                                  A Wephco rep will be present during
                                  inspections
                                </li>
                              </ul>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
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
