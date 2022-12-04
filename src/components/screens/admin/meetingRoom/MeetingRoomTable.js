import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseInitialisation";
import { Table } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";

const MeetingRoomTable = () => {
  const [meetingRoomRequests, setMeetingRoomRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Guests</th>
        <th>Location</th>
        <th>Budget Per Day</th>
        <th>Number of Days</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {meetingRoomRequests.map((request) => (
        <tr>
          <td>{request.fullName}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.guests}</td>
          <th>{request.location}</th>
          <td>{`₦${formatNumber(request.budgetPerDay)}`}</td>
          <td>{request.numberOfDays}</td>
          <td>{request.statusOfRequest}</td>
          <td>{request.dateOfRequest}</td>
        </tr>
      ))}
    </tbody>
  );

  const getMeetingRequests = useCallback(async () => {
    setTableLoading(true);
    var tempMeetingRequests = [];
    try {
      const querySnapshot = await getDocs(
        collection(db, "meetingRoomReservation")
      );
      querySnapshot.forEach((doc) => {
        tempMeetingRequests.push(doc.data());
      });
      setMeetingRoomRequests(tempMeetingRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getMeetingRequests();
  }, [getMeetingRequests]);

  return (
    <div>
      <div className="my-5 h4">Meeting Room Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : meetingRoomRequests.length === 0 ? (
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

export default MeetingRoomTable;
