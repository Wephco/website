import React, { useState, useEffect, useContext, useCallback } from "react";
import { Container, Form, Row, Button, Col, Card } from "react-bootstrap";
import { AppContext } from "../../../context/AppContext";
import { formatNumber } from "../../../utils/formatNumber";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";
import { endpoints } from "../../../utils/URL";
import { useNavigate } from "react-router-dom";

const PropertyReview = () => {
  const { appState } = useContext(AppContext);

  const navigate = useNavigate();

  const [serviceCharge, setServiceCharge] = useState(0);
  const [paymentPlan, setPaymentPlan] = useState("2%");

  const [notes, setNotes] = useState("");

  const getServiceCharge = useCallback(async () => {
    var plan = sessionStorage.getItem("plan") ?? paymentPlan;
    if (plan != null) {
      if (plan === "Basic") {
        setPaymentPlan("2%");
        const charge = appState.budget * 0.02;
        setServiceCharge(charge);
      }
      if (plan === "Classic") {
        setPaymentPlan("5%");
        const charge = appState.budget * 0.05;
        setServiceCharge(charge);
      }
    } else {
      setPaymentPlan("2%");
      const charge = appState.budget * 0.01;
      setServiceCharge(charge);
    }
  }, [appState.budget, paymentPlan]);

  // var publicKey =
  //   process.env.NODE_ENV === "development"
  //     ? `${process.env.REACT_APP_TEST_KEY}`
  //     : `${process.env.REACT_APP_LIVE_KEY}`;

  const config = {
    reference: new Date().getTime().toString(),
    email: sessionStorage.getItem("email"),
    amount: serviceCharge * 100,
    // public key not picked roperly from .env file. leaving here for now.
    publicKey: "pk_live_901de7c33d05fe01fbdd46cf921da1bd3de22431",
  };

  const onSuccess = async (reference) => {
    //make API call to store paystack reference details
    const payload = {
      reference: reference,
      notes: notes,
    };
    const response = await axios.post(
      endpoints.References.postNewReference,
      payload
    );
    if (response.status === 200) {
      navigate("/thank-you");
    }
  };

  const onClose = () => {
    console.log("Payment Closed");
  };

  useEffect(() => {
    getServiceCharge();
  }, [getServiceCharge]);

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <Container>
        <h3 className="text-center" style={{ marginTop: "50px" }}>
          Your Selection Details
        </h3>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7 col-sm-7 mt-5">
            <Form>
              <Row>
                <Col>
                  <Form.Group className="my-2">
                    <Form.Label>Location</Form.Label>
                    <Form.Control disabled value={appState.location} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="my-2">
                    <Form.Label>Budget</Form.Label>
                    <Form.Control
                      disabled
                      // value={`₦${formatNumber(appState.budget)}`}
                      value={appState.budget}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="my-2">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Control disabled value={appState.property} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="my-2">
                    <Form.Label>Number of Bedroom</Form.Label>
                    <Form.Control disabled value={appState.bedroom} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="my-2">
                  <Form.Label>Additional Note</Form.Label>
                  <Form.Control
                    type="text-area"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <p className="text-danger my-2" style={{ fontWeight: "bold" }}>
                *The Service Charge Payment is {paymentPlan} of your budget
              </p>

              <Form.Group className="mb-5">
                <h3 className="text-center">Payment Plans</h3>
                <Row>
                  <Col className="my-2" sm={12} md={6}>
                    <Card
                      bg={paymentPlan === "Basic" ? "info" : ""}
                      text={paymentPlan === "Basic" ? "white" : "dark"}
                      className="text-center"
                      onClick={() => setPaymentPlan("Basic")}
                    >
                      <Card.Header>
                        Wephco Basic{" "}
                        <i
                          style={{ color: "#D8AB34" }}
                          className="bi bi-star-fill"
                        ></i>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <ul>
                            <li clasName="lead">2% Service Charge</li>
                            <li>Maximum of 7 Properties</li>
                            <li>
                              You will be linked with the agent in-charge of the
                              house
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
                      onClick={() => setPaymentPlan("Classic")}
                    >
                      <Card.Header>
                        Wephco Classic{" "}
                        <i
                          style={{ color: "#D8AB34" }}
                          className="bi bi-star-fill"
                        ></i>{" "}
                        <i
                          style={{ color: "#D8AB34" }}
                          className="bi bi-star-fill"
                        ></i>{" "}
                        <i
                          style={{ color: "#D8AB34" }}
                          className="bi bi-star-fill"
                        ></i>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <ul>
                            <li>5% Service Charge</li>
                            <li>Maximum of 15 Properties</li>
                            <li>
                              Wephco will be fully involved with the agent to
                              secure the house
                            </li>
                            <li>No Inspection fee to be paid</li>
                            <li>
                              A Wephco rep will be present during inspections
                            </li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Form.Group>

              <Button
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
                className="m-2"
                variant="dark"
              >
                Proceed to pay ₦{formatNumber(serviceCharge)}
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyReview;
