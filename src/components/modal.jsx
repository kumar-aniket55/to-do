import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
function Modal1(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       <>
       <DeleteIcon onClick={handleShow}/>
        <Modal show={show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter"centered>
            <Modal.Header closeButton>
                <Modal.Title>Do you really want to delete?</Modal.Title>
            </Modal.Header>
                       <Modal.Footer>
                <Button  variant="outline-success" onClick={()=>{handleClose();props.delete(props.id,"yes")}}>
                    YES
                </Button>
                <Button variant="outline-danger" onClick={()=>{handleClose();props.delete(props.id,"no")}}>
                    NO
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );

}
export default Modal1;