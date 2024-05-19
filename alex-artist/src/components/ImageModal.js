import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageModal = ({ show, handleClose, imageUrl }) => {
  return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Image</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={imageUrl} alt="modal pic" className="img-fluid" />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);
};

export default ImageModal;