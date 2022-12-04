import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseInitialisation";
import { Table } from "react-bootstrap";

const PropertyManagementTable = () => {
  const [propertyRequests, setPropertyRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Property Address</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {propertyRequests.map((request) => (
        <tr>
          <td>{request.fullName}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.address}</td>
          <td>{request.statusOfRequest}</td>
          <td>{request.dateOfRequest}</td>
        </tr>
      ))}
    </tbody>
  );

  const getPropertyRequests = useCallback(async () => {
    setTableLoading(true);
    var tempPropertyRequests = [];
    try {
      const querySnapshot = await getDocs(collection(db, "propertyManagement"));
      querySnapshot.forEach((doc) => {
        tempPropertyRequests.push(doc.data());
      });
      setPropertyRequests(tempPropertyRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getPropertyRequests();
  }, [getPropertyRequests]);

  return (
    <div>
      <div className="my-5 h4">Property Management Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : propertyRequests.length === 0 ? (
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

export default PropertyManagementTable;
