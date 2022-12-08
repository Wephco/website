import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseInitialisation";
import { Table } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";

const RealEstateTable = () => {
  const [realEstateRequests, setRealEstateRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Location</th>
        <th>Max Budget</th>
        <th>Property</th>
        <th>Number of Rooms</th>
        <th>Budget</th>
        <th>Notes</th>
        <th>Plan</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {realEstateRequests.map((request) => (
        <tr>
          <td>{request.name}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.location}</td>
          <td>{`₦${formatNumber(request.maxBudget)}`}</td>
          <td>{request.property}</td>
          <td>{request.numberOfRooms}</td>
          <td>{`₦${formatNumber(request.budget)}`}</td>
          <td>{request.additionalNotes}</td>
          <td>{request.plan}</td>
          <td>{request.statusOfRequest}</td>
          <td>{request.dateOfRequest}</td>
        </tr>
      ))}
    </tbody>
  );

  const getRealEstateRequests = useCallback(async () => {
    setTableLoading(true);
    var tempPropertyRequests = [];
    try {
      const querySnapshot = await getDocs(collection(db, "propertyRequest"));
      querySnapshot.forEach((doc) => {
        tempPropertyRequests.push(doc.data());
      });
      setRealEstateRequests(tempPropertyRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getRealEstateRequests();
  }, [getRealEstateRequests]);

  return (
    <div>
      <div className="my-5 h4">Property Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : realEstateRequests.length === 0 ? (
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

export default RealEstateTable;
