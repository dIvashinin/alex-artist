import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='off-canvas-container'>
     <Button variant="danger" onClick={handleShow} className="me-2" >MENU</Button>
     <Offcanvas className="off-canvas-main" show={show} onHide={handleClose} placement="top" >
     <Offcanvas.Header closeButton>
     <Offcanvas.Title>MENU</Offcanvas.Title>
   </Offcanvas.Header>
     
   <Offcanvas.Body className='off-canvas-body'>
    <p>paintings</p>
    <p>sculptures</p>
    <p>installations</p>
    <p>drawings</p>
    <p>art</p>
    <p>exhibitions</p>
    <p>bio</p>
    <p>contact</p>
   </Offcanvas.Body>
 </Offcanvas>
    </div>
  )
}
export default Navbar