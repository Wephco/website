import React from "react";
import Calendar from "./Calendar";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ReservationDate = ({ title, route }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <i
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
        className="bi bi-arrow-left mr-3"
      >
        Back
      </i>

      <div className="header mt-5 text-center">
        <h4
          className="display-7"
          style={{
            fontWeight: "bold",
          }}
        >
          {title}
        </h4>
      </div>
      <Calendar route={route} />
    </Container>
  );
};

export default ReservationDate;
