import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Tabs, Tab, Form, Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { formatNumber } from "../../../utils/formatNumber";

const MenuForm = () => {
  const { appState, changeState } = useContext(AppContext);

  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");
  const [bedroom, setBedroom] = useState(0);
  const [budget, setBudget] = useState("0");

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
    changeState("budget", event.target.value);
    setBudget(event.target.value);
  };

  const continueRequest = async () => {
    const authenticated = appState.isAuthenticated;
    if (!authenticated) {
      navigate("/login");
    } else {
      navigate("/real-estate/review");
    }
  };

  return (
    <div>
      <Form>
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
              <option value="House">House</option>
              <option value="Flat/Apartment">Flat/Apartment</option>
              <option value="Office">Office</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Bedroom</Form.Label>
            <Form.Select value={bedroom} onChange={selectBedroom}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Budget</Form.Label>
            <Form.Control type="text" value={budget} onChange={changeBudget} />
          </Col>
          <Col>
            <Button onClick={continueRequest} className="mt-4" variant="dark">
              Continue
            </Button>
          </Col>
        </Row>
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
