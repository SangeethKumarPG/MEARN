import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "/projectfairlogo.svg"
import {Link} from "react-router-dom"
import logout from "/logout-icon.svg"
function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          
          <Navbar.Brand href="#home">
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Project Fair</Link>
          </Navbar.Brand>
          <button className="btn btn-warning"><img src={logout}/>{" "}Logout</button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
