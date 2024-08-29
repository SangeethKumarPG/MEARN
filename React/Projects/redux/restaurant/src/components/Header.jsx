import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "/logonew.png";
import { Link } from "react-router-dom";
function Header() {
  console.log(logo);
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />{" "}
              Food<span className="text-warning">Circle</span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
