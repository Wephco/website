import React, { useState, useContext, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";
import { AppContext } from "../../../context/AppContext";
import { usePaystackPayment } from "react-paystack";
import Toast from "../../common/Toast";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseInitialisation";

const HotelReservation = () => {
  const { appState } = useContext(AppContext);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [rooms, setRooms] = useState(0);
  const [budget, setBudget] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  const [reservationId, setReservationId] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const config = {
    reference: reservationId,
    email: email,
    amount: amount * 100,
    metadata: {
      name: fullName,
      phone: phone,
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

  const proceed = async (e) => {
    if (
      fullName === "" ||
      phone === "" ||
      email === "" ||
      guests === "" ||
      rooms === 0 ||
      budget === 0
    ) {
      setToastContent("Please fill in the required fields");
      setToastVariant("warning");
      setShowToast(true);
      return;
    }

    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "hotelReservation"), {
        name: fullName,
        phone: phone,
        email: email,
        numberOfGuests: guests,
        numberOfRooms: rooms,
        budget: budget,
        status: "Pending",
        dateOfRequest: new Date().toLocaleString(),
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
    setAmount(0.01 * rooms * budget);
  }, [rooms, budget]);

  let toast = (
    <Toast
      open={showToast}
      close={() => setShowToast(false)}
      content={toastContent}
      variant={toastVariant}
    />
  );

  return (
    <>
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
              <h3 className="">Your Reservation Details</h3>
            </Col>
            <Col></Col>
          </Row>

          <div className="text-center text-muted fw-bold rounded-pill">
            {appState.startDate.getDate()}{" "}
            {months[appState.startDate.getMonth()]} -{" "}
            {appState.endDate.getDate()} {months[appState.endDate.getMonth()]}
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7 col-sm-7 mt-2">
            <Form>
              <Form.Group className="">
                <Form.Label className="fw-bold">Your Full Name*</Form.Label>
                <input
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="">
                <Form.Label className="fw-bold">Phone Number*</Form.Label>
                <input
                  className="form-control"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="fw-bold">Email Address*</Form.Label>
                <input
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="">
                    <Form.Label className="fw-bold">
                      Number of Guests*
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setGuests(e.target.value)}
                      value={guests}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="">
                    <Form.Label className="fw-bold">
                      Number of Rooms*
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setRooms(e.target.value)}
                      value={rooms}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label className="fw-bold">Budget Per Room*</Form.Label>
                <input
                  type="number"
                  className="form-control"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </Form.Group>

              <p className="text-danger fw-bold">
                *The Service Charge Payment is a percentage of your budget
              </p>

              <Button onClick={proceed} className="m-2" variant="dark">
                Proceed to pay ₦{formatNumber(amount)}
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HotelReservation;
