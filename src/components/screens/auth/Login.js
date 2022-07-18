import React, { useState, useContext } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import authImage from "../../../images/auth.png";
import Footer from "../../common/Footer";
import { endpoints } from "../../../utils/URL";
import axios from "axios";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { changeState } = useContext(AppContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const phoneChange = (event) => {
    setPhone(event.target.value);
  };

  const login = async () => {
    setLoading(true);
    try {
      const payload = {
        email: email,
        phone: phone,
      };
      const response = await axios.post(endpoints.Auth.login, payload);
      if (response.status === 200) {
        const userData = response.data;
        sessionStorage.setItem("name", userData.name);
        sessionStorage.setItem("email", userData.user);
        sessionStorage.setItem("phone", userData.phone);
        // await changeState("name", userData.name);
        // await changeState("email", userData.user);
        // await changeState("phone", userData.phone);
        await changeState("isAuthenticated", true);
        navigate("/find-a-property");
      } else if (response.status === 400 || response.status === 401) {
        alert("Email/Phone incorrect");
      } else {
        alert("Server Error. Please try again later");
      }
    } catch (error) {
      alert("Unavailable at the moment. Try again later");
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
                  <h4 className="display-6" style={{ fontWeight: "bold" }}>
                    Login to continue
                  </h4>
                </div>
                <Form>
                  <fieldset disabled={loading}>
                    <Form.Group>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Your email address"
                        onChange={emailChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Your phone number"
                        onChange={phoneChange}
                      />
                    </Form.Group>
                    {loading ? (
                      <div class="spinner-border text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <div className="d-grid gap-2 col-12">
                        <Button onClick={login} variant="dark">
                          Login
                        </Button>
                      </div>
                    )}
                  </fieldset>
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
