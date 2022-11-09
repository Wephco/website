import React, { useState, useContext, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";
import { AppContext } from "../../../context/AppContext";
import { usePaystackPayment } from "react-paystack";
import Toast from "../../common/Toast";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseInitialisation";

const OfficeReservation = () => {
  const { appState } = useContext(AppContext);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [workers, setWorkers] = useState(0);
  const [workstations, setWorkstations] = useState(0);
  const [budgetPerDay, setBudgetPerDay] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
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

  const publicKey =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_LIVE_KEY
      : process.env.REACT_APP_TEST_KEY;

  const config = {
    reference: reservationId,
    email: email,
    amount: amount * 100,
    metadata: {
      name: fullName,
      phone: phone,
    },
    publicKey: publicKey,
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
      workers === 0 ||
      workstations === 0 ||
      budgetPerDay === 0 ||
      numberOfDays === 0
    ) {
      setToastContent("Please fill in the required fields");
      setToastVariant("warning");
      setShowToast(true);
      return;
    }

    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "officeReservation"), {
        fullName: fullName,
        phone: phone,
        email: email,
        workers: workers,
        workstations: workstations,
        budgetPerDay: budgetPerDay,
        numberOfDays: numberOfDays,
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
    setAmount(0.01 * workers * workstations * budgetPerDay * numberOfDays);
  }, [workers, workstations, budgetPerDay, numberOfDays]);

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
              <i style={{cursor:'pointer'}} onClick={() => navigate(-1)} className="bi bi-arrow-left">
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
              <Form.Group className="m-2">
                <Form.Label className="fw-bold">
                  Your Full Name{<span className="text-danger">*</span>}
                </Form.Label>
                <input
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="m-2">
                <Form.Label className="fw-bold">
                  Phone Number{<span className="text-danger">*</span>}
                </Form.Label>
                <input
                  className="form-control"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="m-2">
                <Form.Label className="fw-bold">
                  Email Address{<span className="text-danger">*</span>}
                </Form.Label>
                <input
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="m-2">
                    <Form.Label className="fw-bold">
                      Number of Workers{<span className="text-danger">*</span>}
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setWorkers(e.target.value)}
                      value={workers}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="m-2">
                    <Form.Label className="fw-bold">
                      Number of Workstations
                      {<span className="text-danger">*</span>}
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setWorkstations(e.target.value)}
                      value={workstations}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="m-2">
                    <Form.Label className="fw-bold">
                      Budget per Day{<span className="text-danger">*</span>}
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setBudgetPerDay(e.target.value)}
                      value={budgetPerDay}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="m-2">
                    <Form.Label className="fw-bold">
                      Number of Days{<span className="text-danger">*</span>}
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setNumberOfDays(e.target.value)}
                      value={numberOfDays}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <p className="text-danger fw-bold">
                *The Service Charge Payment is 1% of your total budget
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

export default OfficeReservation;
