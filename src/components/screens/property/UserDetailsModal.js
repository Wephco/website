import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../context/AppContext";

const UserDetailsModal = ({ open, close }) => {
  const { appState, setAppState } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const saveDetails = () => {
    setAppState({
      ...appState,
      name: name,
      email: email,
      phone: phone,
    });
    close();
  };

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please fill the form below to continue</h4>
        <label>Name</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone</label>
        <input
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={saveDetails} className="btn btn-primary">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetailsModal;
