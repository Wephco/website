import React from "react";
import { Modal } from "react-bootstrap";

const UserDatailsModal = ({ open, close }) => {
  const saveDetails = (input) => (event) => {
    sessionStorage.setItem(input.toString(), event.target.value);
  };

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please fill the form below to continue</h4>
        <label>Name</label>
        <input className="form-control" onChange={saveDetails("name")} />
        <label>Email</label>
        <input className="form-control" onChange={saveDetails("email")} />
        <label>Phone</label>
        <input className="form-control" onChange={saveDetails("phone")} />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={close} className="btn btn-primary">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDatailsModal;
