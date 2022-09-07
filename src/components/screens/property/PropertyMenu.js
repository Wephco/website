import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Tabs, Tab, Form, Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { endpoints } from "../../../utils/URL";
// import { formatNumber } from "../../../utils/formatNumber";

const MenuForm = () => {
  const { changeState } = useContext(AppContext);

  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");
  const [bedroom, setBedroom] = useState(0);
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const changeLocation = async (event) => {
    changeState("location", event.target.value);
    setLocation(event.target.value);
  };

  const selectProperty = async (event) => {
    changeState("property", event.target.value);
    setProperty(event.target.value);
  };

  const selectBedroom = async (event) => {
    changeState("bedroom", event.target.value);
    setBedroom(event.target.value);
  };

  const changeBudget = async (event) => {
    const chosenBudget = event.target.selectedOptions[0].getAttribute("budget");
    setBudget(event.target.value);
    sessionStorage.setItem("budget", event.target.value);
    // await changeState("budget", event.target.value);
    await changeState("maxBudget", chosenBudget);
  };

  // const setValues = async () => {

  //   await changeState("bedroom", bedroom);
  //   await changeState("property", property);
  //   await changeState("location", location);
  // };

  const sendDetails = async () => {
    try {
      setLoading(true);

      // await setValues();

      // save to firebase

      navigate("/real-estate/review");
    } catch (error) {
      console.log(error);
      alert(
        "We're experiencing some downtime at the moment. Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  const continueRequest = async () => {
    if (location === "") {
      alert("Please enter a location.");
      return;
    }
    if (property === "") {
      alert("Please select a property.");
      return;
    }
    // if (bedroom === 0) {
    //   alert("Please select bedroom size.");
    //   return;
    // }
    if (budget === "") {
      alert("Please enter your budget");
      return;
    }

    if (budget === "₦20,000,000 and above") {
      navigate("/contact-us");
      return;
    }
    // const authenticated = appState.isAuthenticated;
    // if (!authenticated) {
    //   navigate("/login");
    // } else {
    //   // make API call to send details to database
    //   await sendDetails();
    // }
    await sendDetails();
  };

  return (
    <div>
      <Form>
        <fieldset disabled={loading}>
          <Row>
            <Col>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={changeLocation}
              />
            </Col>
            <Col>
              <Form.Label>Property</Form.Label>
              <Form.Select value={property} onChange={selectProperty}>
                <option value="-">-</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Serviced Apartment">Serviced Apartment</option>
                <option value="Land">Land</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Bedroom</Form.Label>
              <Form.Select value={bedroom} onChange={selectBedroom}>
                <option value={0}>-</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Budget Range</Form.Label>
              <Form.Select value={budget} onChange={changeBudget}>
                <option budget={0} value="">
                  -
                </option>
                <option
                  budget={1000000}
                  id="1000000"
                  value="less than ₦1,000,000"
                >
                  less than ₦1,000,000
                </option>
                <option
                  budget={3000000}
                  id="3000000"
                  value="₦1,000,000 - ₦3,000,000"
                >
                  ₦1,000,000 - ₦3,000,000
                </option>
                <option
                  budget={5000000}
                  id="5000000"
                  value="₦3,000,000 - ₦5,000,000"
                >
                  ₦3,000,000 - ₦5,000,000
                </option>
                <option
                  budget={10000000}
                  id="10000000"
                  value="₦5,000,000 - ₦10,000,000"
                >
                  ₦5,000,000 - ₦10,000,000
                </option>
                <option
                  budget={15000000}
                  id="15000000"
                  value="₦10,000,000 - ₦15,000,000"
                >
                  ₦10,000,000 - ₦15,000,000
                </option>
                <option
                  budget={19000000}
                  id="19000000"
                  value="₦15,000,000 - ₦19,000,000"
                >
                  ₦15,000,000 - ₦19,000,000
                </option>
                <option budget={20000000} value="₦20,000,000 and above">
                  ₦20,000,000 and above
                </option>
              </Form.Select>
            </Col>
            <Col>
              {loading ? (
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <div className="d-grid gap-2 col-12">
                  <Button
                    onClick={continueRequest}
                    className="mt-4"
                    variant="dark"
                  >
                    Continue
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </fieldset>
      </Form>
    </div>
  );
};

const PropertyMenu = () => {
  const [key, setKey] = useState("rent");
  return (
    <Container>
      <Tabs
        // variant="pills"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-5 nav-fill"
      >
        <Tab eventKey="rent" title="Rent">
          <MenuForm />
        </Tab>
        <Tab eventKey="buy" title="Buy">
          <MenuForm />
        </Tab>
        <Tab eventKey="sell" title="Sell">
          <MenuForm />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PropertyMenu;
