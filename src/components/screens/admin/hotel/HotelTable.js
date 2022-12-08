import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseInitialisation";
import { Table } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";

const HotelTable = () => {
  const [hotelRequests, setHotelRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Guests</th>
        <th>Rooms</th>
        <th>Budget</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {hotelRequests.map((request) => (
        <tr>
          <td>{request.name}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.numberOfGuests}</td>
          <td>{request.numberOfRooms}</td>
          <td>{`₦${formatNumber(request.budget)}`}</td>
          <td>{request.statusOfRequest}</td>
          <td>{request.dateOfRequest}</td>
        </tr>
      ))}
    </tbody>
  );

  const getHotelRequests = useCallback(async () => {
    setTableLoading(true);
    var tempHotelRequests = [];
    try {
      const querySnapshot = await getDocs(collection(db, "hotelReservation"));
      querySnapshot.forEach((doc) => {
        tempHotelRequests.push(doc.data());
      });
      setHotelRequests(tempHotelRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getHotelRequests();
  }, [getHotelRequests]);

  return (
    <div>
      <div className="my-5 h4">Hotel Reservation Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : hotelRequests.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center">
          <h4>No Data Found</h4>
        </div>
      ) : (
        <Table responsive bordered striped>
          {tableHeader}
          {tableBody}
        </Table>
      )}
    </div>
  );
};

export default HotelTable;
