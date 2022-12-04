import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseInitialisation";
import { Table } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";

const OfficeSpaceTable = () => {
  const [officeSpaceRequests, setOfficeSpaceRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Workers</th>
        <th>Workstations</th>
        <th>Budget Per Day</th>
        <th>Number of Days</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {officeSpaceRequests.map((request) => (
        <tr>
          <td>{request.fullName}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.workers}</td>
          <th>{request.workstations}</th>
          <td>{`₦${formatNumber(request.budgetPerDay)}`}</td>
          <td>{request.numberOfDays}</td>
          <td>{request.statusOfRequest}</td>
          <td>{request.dateOfRequest}</td>
        </tr>
      ))}
    </tbody>
  );

  const getOfficeSpaceRequests = useCallback(async () => {
    setTableLoading(true);
    var tempOfficeRequests = [];
    try {
      const querySnapshot = await getDocs(collection(db, "officeReservation"));
      querySnapshot.forEach((doc) => {
        tempOfficeRequests.push(doc.data());
      });
      setOfficeSpaceRequests(tempOfficeRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getOfficeSpaceRequests();
  }, [getOfficeSpaceRequests]);

  return (
    <div>
      <div className="my-5 h4">Office Space Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : officeSpaceRequests.length === 0 ? (
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

export default OfficeSpaceTable;
