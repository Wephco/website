import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseInitialisation";
import { Table } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";

const ShortletTable = () => {
  const [shortLetRequests, setShortLetRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Rooms</th>
        <th>Budget Per Day</th>
        <th>Number of Days</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {shortLetRequests.map((request) => (
        <tr>
          <td>{request.fullName}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.rooms}</td>
          <td>{`₦${formatNumber(request.budgetPerDay)}`}</td>
          <td>{request.numberOfDays}</td>
          <td>{request.statusOfRequest}</td>
          <td>{request.dateOfRequest}</td>
        </tr>
      ))}
    </tbody>
  );

  const getShortletRequests = useCallback(async () => {
    setTableLoading(true);
    var tempShortletRequests = [];
    try {
      const querySnapshot = await getDocs(
        collection(db, "shortletReservation")
      );
      querySnapshot.forEach((doc) => {
        tempShortletRequests.push(doc.data());
      });
      setShortLetRequests(tempShortletRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getShortletRequests();
  }, [getShortletRequests]);

  return (
    <div>
      <div className="my-5 h4">Shortlet/Apartments Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : shortLetRequests.length === 0 ? (
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

export default ShortletTable;
