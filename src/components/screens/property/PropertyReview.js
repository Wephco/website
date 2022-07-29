import React, { useState, useEffect, useContext, useCallback } from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
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

  const [notes, setNotes] = useState("");

  const getServiceCharge = useCallback(async () => {
    const charge = appState.budget * 0.01;
    setServiceCharge(charge);
  }, [appState.budget]);

  // var publicKey =
  //   process.env.NODE_ENV === "development"
  //     ? `${process.env.REACT_APP_TEST_KEY}`
  //     : `${process.env.REACT_APP_LIVE_KEY}`;

  const config = {
    reference: new Date().getTime().toString(),
    email: sessionStorage.getItem("email"),
    amount: serviceCharge * 100,
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
          <div className="col-md-6 col-sm-6 mt-5">
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
                      value={`₦${formatNumber(appState.budget)}`}
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
                *The Service Charge Payment is 1% of your budget
              </p>
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
