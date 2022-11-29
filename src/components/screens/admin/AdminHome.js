import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const AdminHome = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>
              <Link to="/">Admin Home</Link>
            </Card.Title>
          </Card.Header>
        </Card>
      </Container>
    </div>
  );
};

export default AdminHome;
