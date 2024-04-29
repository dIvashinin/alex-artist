import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
     <Button variant="danger" onClick={handleShow} className="me-2"></Button>
     <Offcanvas show={show} onHide={handleClose} >
     <Offcanvas.Header closeButton>
     <Offcanvas.Title>MENU</Offcanvas.Title>
   </Offcanvas.Header>
   <Offcanvas.Body>
     Here we gonna have stuff
   </Offcanvas.Body>
 </Offcanvas>
    </>
  )
}
export default Navbar