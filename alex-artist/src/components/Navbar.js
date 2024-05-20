import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Navbar() {

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const handleMenuItemClick = () => {
    //   handleClose(); // Close the offcanvas when a menu item is clicked
    // };
    

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

// changed navbar to normal instead of offcanvas style
return (
  <nav className='navigation-bar'>
      <ul className='navigation-bar-nav'>
        <li className='navigation-item'>
          <Link to="/" className='navigation-link'>home</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/paintings" className='navigation-link'>paintings</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/sculptures" className='navigation-link'>sculptures</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/installations" className='navigation-link'>installations</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/drawings" className='navigation-link'>drawings</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/art" className='navigation-link'>art</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/exhibitions" className='navigation-link'>exhibitions</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/bio" className='navigation-link'>bio</Link>
        </li>
        <li className='navigation-item'>
          <Link to="/contact" className='navigation-link'>contact</Link>
        </li>
      </ul>
    </nav>
)

}
export default Navbar