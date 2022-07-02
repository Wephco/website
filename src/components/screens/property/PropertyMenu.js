import React, { useState } from "react";
import { Tabs, Tab, Form, Row, Col, Button, Container } from "react-bootstrap";

const MenuForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Property</Form.Label>
            <Form.Select>
              <option>House</option>
              <option>Flat/Apartment</option>
              <option>Office</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Bedroom</Form.Label>
            <Form.Select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Budget</Form.Label>
            <Form.Control type="number" />
          </Col>
          <Col>
            <Button className="mt-4" variant="dark">
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
