import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

  return (
    <div className='off-canvas-container'>
     <Button variant="danger" onClick={handleShow} className="me-2" >MENU</Button>
     <Offcanvas className="off-canvas-main" show={show} onHide={handleClose} placement="top" scroll="true" >
     <Offcanvas.Header className='off-canvas-header' closeButton>
     <Offcanvas.Title className='off-canvas-title'>MENU</Offcanvas.Title>
   </Offcanvas.Header>
     
   <Offcanvas.Body className='off-canvas-body'>
    <p><Link to="/paintings">paintings</Link></p>
    <p>sculptures</p>
    <p>installations</p>
    <p>drawings</p>
    <p>art</p>
    <p><Link to="/exhibitions">exhibitions</Link></p>
    <p>bio</p>
    <p>contact</p>
   </Offcanvas.Body>
 </Offcanvas>
    </div>
  )
}
export default Navbar