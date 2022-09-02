import React from "react";
import { Calendar } from "../../common/Calendar"
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";


const Hotel = (props) => {
    
  return (
    <Container>
      <Link
        to="/exclusive-offers"
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Back to stuff
      </Link>
      
      <div className="header mt-5 text-center">
        <h4
          className="display-4"
          style={{
            fontWeight: "bold",
          }}
        >
          Hotel Reservation
        </h4>
      </div>
      <Calendar></Calendar>
          
    </Container>
  );
};

export default Hotel;
