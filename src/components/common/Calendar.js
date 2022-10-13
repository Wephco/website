import React, { useState, useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Toasts from "./Toast";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../../context/AppContext";

const Calendar = ({ route }) => {
  const { appState, setAppState } = useContext(AppContext);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const submit = (event) => {
    event.preventDefault();

    const checkIn = startDate.getDate();
    const checkOut = endDate.getDate();
    const dateToday = new Date().getDate();
    
    if (checkIn < dateToday){
        setShowToast(true);
      return;
    }

    if (checkIn === checkOut || checkIn > checkOut) {
      setShowToast(true);
      return;
    }

    setAppState({
      ...appState,
      startDate: startDate,
      endDate: endDate,
    });

    navigate(route);
  };

  let toast = (
    <Toasts
      open={showToast}
      close={() => setShowToast(false)}
      content="Sample Toast"
      //   variant='primary'
    />
  );

  return (
    <>
      {toast}
      <Container>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8 col-sm-6 mt-2">
            {/* Header */}
            <div className="calendar-header mt-3">
              <h5 className="text-white text-center p-2">CHOOSE DATE</h5>
            </div>

            {/* Date Input */}
            <Row>
              <Col className="p-2">
                <p className="lead text-center">
                  <i className="bi bi-circle-fill mr-2">Check-in Date</i>
                </p>
                <p className="text-center">
                  {startDate.getDate()} {months[startDate.getMonth()]}{" "}
                  {startDate.getFullYear()}{" "}
                </p>
                <div className="text-center">
                  <DatePicker
                    className="text-center"
                    showPreviousMonths={false}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </Col>
              <Col className="p-2">
                <p className="lead text-center">
                  <i
                    style={{ color: "red" }}
                    className="bi bi-circle-fill mr-2"
                  >
                    Check-out Date
                  </i>
                </p>
                <p className="text-center">
                  {endDate.getDate()} {months[endDate.getMonth()]}{" "}
                  {endDate.getFullYear()}
                </p>
                <div className="text-center">
                  <DatePicker
                    className="text-center"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </Col>
            </Row>
            {/* submit button */}
            <div className="text-center mt-5">
              <Button variant="dark" onClick={submit}>
                CONTINUE
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Calendar;
