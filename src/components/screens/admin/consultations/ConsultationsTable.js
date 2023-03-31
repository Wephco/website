import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase/firebaseInitialisation';
import { Table } from 'react-bootstrap';

const ConsultationsTable = () => {
  const [consultationRequests, setConsultationRequests] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  let tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Message</th>
        <th>Contact Method</th>
      </tr>
    </thead>
  );

  let tableBody = (
    <tbody>
      {consultationRequests.map((request) => (
        <tr>
          <td>{request.name}</td>
          <td>{request.location}</td>
          <td>{request.phone}</td>
          <td>{request.email}</td>
          <td>{request.message}</td>
          <td>{request.contactMethod}</td>
        </tr>
      ))}
    </tbody>
  );

  const getConsultationRequests = useCallback(async () => {
    setTableLoading(true);
    var tempConsultationRequests = [];
    try {
      const querySnapshot = await getDocs(collection(db, 'consultations'));
      querySnapshot.forEach((doc) => {
        tempConsultationRequests.push(doc.data());
      });
      setConsultationRequests(tempConsultationRequests);
    } catch (error) {
    } finally {
      setTableLoading(false);
    }
  }, []);

  useEffect(() => {
    getConsultationRequests();
  }, [getConsultationRequests]);

  return (
    <div>
      <div className='my-5 h4'>Property Requests</div>
      {tableLoading ? (
        <div>Table Loading...</div>
      ) : consultationRequests.length === 0 ? (
        <div className='d-flex justify-content-center align-items-center'>
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

export default ConsultationsTable;
