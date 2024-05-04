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
    

//   return (
//     <div className='off-canvas-container'>
//       <nav>
//      {/* <Button variant="danger" onClick={handleShow} className="off-canvas-button" >MENU</Button> */}
//      {/* <Offcanvas className="off-canvas-main" show={show} onHide={handleClose} placement="top" scroll="true" > */}
//      {/* <Offcanvas.Header className='off-canvas-header' closeButton> */}
//      {/* <Offcanvas.Title className='off-canvas-title'>MENU</Offcanvas.Title> */}
//    {/* </Offcanvas.Header> */}
     
//    {/* <Offcanvas.Body className='off-canvas-body'> */}
//    <p 
//   //  onClick={handleMenuItemClick}
//    >
//     <Link to="/">home</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/paintings">paintings</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/sculptures">sculptures</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/installations">installations</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/drawings">drawings</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/art">art</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/exhibitions">exhibitions</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/bio">bio</Link></p>
//     <p 
//     // onClick={handleMenuItemClick}
//     >
//       <Link to="/contact">contact</Link></p>
//    {/* </Offcanvas.Body> */}
//  {/* </Offcanvas> */}
//  </nav>
//     </div>
//   )


return (
  <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/paintings" className='nav-link'>Paintings</Link>
        </li>
        <li className='nav-item'>
          <Link to="/sculptures" className='nav-link'>Sculptures</Link>
        </li>
        <li className='nav-item'>
          <Link to="/installations" className='nav-link'>Installations</Link>
        </li>
        <li className='nav-item'>
          <Link to="/drawings" className='nav-link'>Drawings</Link>
        </li>
        <li className='nav-item'>
          <Link to="/art" className='nav-link'>Art</Link>
        </li>
        <li className='nav-item'>
          <Link to="/exhibitions" className='nav-link'>Exhibitions</Link>
        </li>
        <li className='nav-item'>
          <Link to="/bio" className='nav-link'>Bio</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </li>
      </ul>
    </nav>
)

}
export default Navbar