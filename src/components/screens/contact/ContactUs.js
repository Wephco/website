import React, { useState } from "react";
import axios from "axios";
import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../utils/URL";

const ContactUs = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (
      name === "" ||
      location === "" ||
      phone === "" ||
      email === "" ||
      message === ""
    ) {
      alert("All fields are required.");
      return;
    }
    try {
      setLoading(true);

      const payload = {
        name: name,
        location: location,
        phone: phone,
        email: email,
        message: message,
      };

      await axios.post(endpoints.Contact.mainURL, payload);
      navigate("/thank-you");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <h3 className="text-center" style={{ marginTop: "30px" }}>
          Speak to us for our expert opinion
        </h3>
        <h5 className="text-center" style={{ marginTop: "10px" }}>
          Book a call with our sales team to see how we can work together
        </h5>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-sm-6 mt-2">
            <Form>
              <fieldset disabled={loading}>
                <Form.Group className="my-2">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-2">
                  <Form.Label>Location*</Form.Label>
                  <Form.Control
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-2">
                  <Form.Label>Phone*</Form.Label>
                  <Form.Control
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-2">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-2">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
              </fieldset>
            </Form>
            {loading ? (
              <div class="spinner-border text-dark mb-5" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div className="d-grid gap-2 col-12 mt-3 mb-5">
                <Button onClick={submit} variant="dark">
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
