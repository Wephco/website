import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Toast from "../../common/Toast";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseInitialisation";

const PropertyManagement = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  const [online, setOnline] = useState(navigator.onLine);

  const networkChange = () => {
    setOnline(navigator.onLine);
  };

  const proceed = async (e) => {
    e.preventDefault();

    if (online) {
      if (fullName === "" || phone === "" || email === "" || address === "") {
        setToastContent("Please fill in the required fields");
        setToastVariant("warning");
        setShowToast(true);
        return;
      }

      setLoading(true);

      try {
        await addDoc(collection(db, "propertyManagement"), {
          fullName: fullName,
          phone: phone,
          email: email,
          address: address,
          statusOfRequest: "Pending",
          dateOfRequest: new Date().toLocaleString(),
        });
        setToastContent("Request sent successfully.");
        setToastVariant("success");
        setShowToast(true);
        clearForm();
      } catch (error) {
        setToastContent("Error Processing Request. Try Again Later");
        setToastVariant("danger");
        setShowToast(true);
      } finally {
        setLoading(false);
      }
    } else {
      setToastContent(
        "No Network Detected. Please check internet connection and try again"
      );
      setToastVariant("danger");
      setShowToast(true);
      return;
    }
  };

  const clearForm = () => {
    setAddress("");
    setEmail("");
    setFullName("");
    setPhone("");
  };

  useEffect(() => {
    window.addEventListener("online", networkChange);
    window.addEventListener("offline", networkChange);

    return () => {
      window.removeEventListener("online", networkChange);
      window.removeEventListener("online", networkChange);
    };
  }, [online]);

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
        {/* Header Section */}
        <div className="text-center" style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              <i
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
                className="bi bi-arrow-left"
              >
                Back
              </i>
            </Col>
            <Col>
              <h3 className="">Property Management</h3>
            </Col>
            <Col></Col>
          </Row>

          <p className="text-center text-muted fw-bold rounded-pill">
            Please fill in the form below
          </p>
        </div>
        {/* Form Section */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-sm-7 mt-2">
            <form>
              <fieldset disabled={loading}>
                <label className=" fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  placeholder="Your Full Name*"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label className=" fw-bold">Phone Number</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  placeholder="Phone Number*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className=" fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control p-2 mb-3"
                  placeholder="Email Address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className=" fw-bold">Property Address</label>
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  placeholder="Property Address*"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {loading ? (
                  <div className="spinner-border text-dark" role="status"></div>
                ) : (
                  <button onClick={proceed} className="btn btn-dark mt-3">
                    Submit
                  </button>
                )}
              </fieldset>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyManagement;
