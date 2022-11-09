import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Row, Button, Col, Card } from "react-bootstrap";
import { AppContext } from "../../../context/AppContext";
import { formatNumber } from "../../../utils/formatNumber";
import { usePaystackPayment } from "react-paystack";
// import axios from "axios";
// import { endpoints } from "../../../utils/URL";
import { useNavigate } from "react-router-dom";
import UserDetailsModal from "./UserDetailsModal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseInitialisation";
import Toast from "../../common/Toast";

const PropertyReview = () => {
  const { appState } = useContext(AppContext);

  const navigate = useNavigate();

  const [budget] = useState(appState.maxBudget);
  const [paymentPlan, setPaymentPlan] = useState("Wephco Basic");
  const [serviceCharge, setServiceCharge] = useState(appState.serviceCharge);
  const [amount, setAmount] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [notes, setNotes] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastVariant, setToastVariant] = useState("");

  const updateServiceCharge = (plan) => {
    if (plan === "Basic") {
      setServiceCharge(0.01);
      setPaymentPlan("Wephco Basic");
    } else {
      setServiceCharge(0.04);
      setPaymentPlan("Wephco Classic");
    }
  };

  // var publicKey =
  //   process.env.NODE_ENV === "development"
  //     ? `${process.env.REACT_APP_TEST_KEY}`
  //     : `${process.env.REACT_APP_LIVE_KEY}`;

  const config = {
    reference: reservationId,
    email: appState.email,
    amount: amount * 100,
    metadata: {
      name: appState.name,
      phone: appState.phone,
    },
    publicKey: process.env.REACT_APP_LIVE_KEY,
  };

  const onSuccess = (reference) => {
    console.log(reference);
    navigate("/thank-you");
  };

  const onClose = () => {
    console.log("Payment Closed");
  };

  const initializePayment = usePaystackPayment(config);

  const proceed = async () => {
    try {
      const docRef = await addDoc(collection(db, "propertyRequest"), {
        name: appState.name,
        phone: appState.phone,
        email: appState.email,
        location: appState.location,
        maxBudget: appState.maxBudget,
        property: appState.property,
        numberOfRooms: appState.bedroom,
        budget: budget,
        additionalNotes: notes,
        plan: paymentPlan,
      });

      setReservationId(docRef.id);
      initializePayment(onSuccess, onClose);
    } catch (error) {
      setToastContent("Error Processing Request. Try Again Later");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  useEffect(() => {
    setAmount(serviceCharge * budget);
  }, [serviceCharge, budget]);

  let userDetails = (
    <UserDetailsModal open={showModal} close={() => setShowModal(false)} />
  );

  let toast = (
    <Toast
      open={showToast}
      close={() => setShowToast(false)}
      content={toastContent}
      variant={toastVariant}
    />
  );

  return (
    <div>
      {userDetails}
      {toast}
      <Container>
        <div className="text-center" style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              <i onClick={() => navigate(-1)} className="bi bi-arrow-left">
                Back
              </i>
            </Col>
            <Col>
              <h3 className="">Your Selection Details</h3>
            </Col>
            <Col></Col>
          </Row>
        </div>

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
                      value={`₦${formatNumber(parseInt(appState.maxBudget))}`}
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
                *The Service Charge Payment is a percentage of your budget
              </p>

              <Form.Group className="mb-5">
                <h3 className="text-center">Payment Plans</h3>
                <Row>
                  <Col className="my-2" sm={12} md={6}>
                    <Card
                      bg={paymentPlan === "Wephco Basic" ? "dark" : ""}
                      text={paymentPlan === "Wephco Basic" ? "white" : "dark"}
                      className="text-center"
                      onClick={() => updateServiceCharge("Basic")}
                    >
                      <Card.Header>
                        Wephco Basic{" "}
                        <i
                          style={{ color: "#D8AB34" }}
                          className="bi bi-star-fill"
                        ></i>
                      </Card.Header>
                      <Card.Body>
                        <div>
                          <ul className="lead">
                            <li>2% Service Charge</li>
                            <li>Maximum of 7 Properties</li>
                            <li>
                              You will be linked with the agent in-charge of the
                              house
                            </li>
                            <li>Inspection fees would be paid</li>
                            <li>We won't be present during inspections</li>
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="my-2" sm={12} md={6}>
                    <Card
                      bg={paymentPlan === "Wephco Classic" ? "dark" : ""}
                      text={paymentPlan === "Wephco Classic" ? "white" : "dark"}
                      className="text-center"
                      onClick={() => updateServiceCharge("Classic")}
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
                        <div>
                          <ul className="lead">
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
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Form.Group>

              <Button
                onClick={() => {
                  const email = appState.email;
                  const name = appState.name;
                  if (
                    email === "" ||
                    email === null ||
                    name === "" ||
                    name === null
                  ) {
                    setShowModal(true);
                  } else {
                    proceed();
                  }
                }}
                className="m-2"
                variant="dark"
              >
                Proceed to pay ₦{formatNumber(amount)}
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyReview;
