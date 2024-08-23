import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Badge} from "react-bootstrap"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand>
            
            <Link to={"/"} style={{textDecoration:"none", color:"white"}}><i className="fa-solid fa-cart-shopping fa-bounce"></i>E-Kart</Link>
            
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><Link to={"/"} style={{color:"white", textDecoration:"none"}}>Home</Link></Nav.Link>
              <Nav.Link>
                <Link to={"/cart"} style={{color:"white", textDecoration:"none"}}>Cart <Badge bg="secondary" className="fs-10">1</Badge></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/wishlist"} style={{color:"white", textDecoration:"none"}}>Wishlist <Badge bg="secondary" className="fs-10">1</Badge></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
