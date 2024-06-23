import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const DeleteConfirmation = (props) => {
  return (
    <><Modal show={props.showModal} onHide={()=>{props.closeDeleteConfirmationModelHandler()}}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.body}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>{props.closeDeleteConfirmationModelHandler();}}>
        Close
      </Button>
      <Button variant="danger" onClick={()=>props.DeleteConfirmHandler()}>
        Confirm Delete
      </Button>
    </Modal.Footer>
  </Modal></>
  )
}

export default DeleteConfirmation