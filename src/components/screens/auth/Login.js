import React, { useState, useContext } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import authImage from "../../../images/auth.png";
import Footer from "../../common/Footer";
// import { endpoints } from "../../../utils/URL";
// import axios from "axios";
import { AppContext } from "../../../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../firebase/firebaseInitialisation";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { appState, setAppState } = useContext(AppContext);

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

  const loginUser = async (event) => {
    event.preventDefault();

    setLoading(true);

    signInWithEmailAndPassword(auth, email, phone)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setAppState({
          ...appState,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          imageUrl: user.photoURL,
          isAuthenticated: true,
        });

        // admin logic here
          if(user.email === process.env.REACT_APP_ADMIN_EMAIL){
            setAppState({
              isAdmin: true
            })

            navigate('/admin/home')
          }
        // end of admin logic
        navigate("/real-estate/review");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error logging in. ${errorMessage}`);
      })
      .finally(() => {
        setLoading(false);
      });
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
                      <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <div className="d-grid gap-2 col-12">
                        <Button onClick={loginUser} variant="dark">
                          Login
                        </Button>
                      </div>
                    )}
                  </fieldset>
                </Form>
                <div className="register mt-3">
                  <p>
                    New User? <Link to="/register">Register Here</Link>
                  </p>
                </div>
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
