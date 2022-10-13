import React from "react";
import Calendar from "../../common/Calendar";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hotel = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <i
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
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
          Hotel Reservation
        </h4>
      </div>
      <Calendar route="/" />
    </Container>
  );
};

export default Hotel;
