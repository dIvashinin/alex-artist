import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Navbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMenuItemClick = () => {
      handleClose(); // Close the offcanvas when a menu item is clicked
    };
    

  return (
    <div className='off-canvas-container'>
     <Button variant="danger" onClick={handleShow} className="me-2" >MENU</Button>
     <Offcanvas className="off-canvas-main" show={show} onHide={handleClose} placement="top" scroll="true" >
     <Offcanvas.Header className='off-canvas-header' closeButton>
     <Offcanvas.Title className='off-canvas-title'>MENU</Offcanvas.Title>
   </Offcanvas.Header>
     
   <Offcanvas.Body className='off-canvas-body'>
   <p onClick={handleMenuItemClick}><Link to="/">home</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/paintings">paintings</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/sculptures">sculptures</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/installations">installations</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/drawings">drawings</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/art">art</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/exhibitions">exhibitions</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/bio">bio</Link></p>
    <p onClick={handleMenuItemClick}><Link to="/contact">contact</Link></p>
   </Offcanvas.Body>
 </Offcanvas>
    </div>
  )
}
export default Navbar