import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Badge} from "react-bootstrap"
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

function Header() {
  //useSelector hook is used to access the state from the store.
  const wishlist = useSelector((state)=>state.wishlistReducer);
  // console.log("============Wishlist Items=============");
  // console.log(wishlist);
  const cart = useSelector((state)=>state.cartReducer);

  return (
    <>
      <Navbar expand="lg" className="bg-primary" style={{position:"sticky", top:"0"}} fixed="top">
        <Container>
          <Navbar.Brand>
            
            <Link to={"/"} style={{textDecoration:"none", color:"white"}}><i className="fa-solid fa-cart-shopping fa-bounce"></i>E-Kart</Link>
            
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor:"white"}}>
          <span className="navbar-toggler-icon" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")` }}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><Link to={"/"} style={{color:"white", textDecoration:"none"}}>Home</Link></Nav.Link>
              <Nav.Link>
                <Link to={"/cart"} style={{color:"white", textDecoration:"none"}}>Cart <Badge bg="secondary" className="fs-10">{cart?.length}</Badge></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/wishlist"} style={{color:"white", textDecoration:"none"}}>Wishlist <Badge bg="secondary" className="fs-10">{wishlist?.length}</Badge></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
