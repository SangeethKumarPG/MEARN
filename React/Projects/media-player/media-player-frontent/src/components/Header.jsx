import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
              
                {/* <img
                  alt=""
                  src="/img/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '} */}
                <i className="fa-solid fa-video text-warning"></i>

                &nbsp;Video Player
              </Navbar.Brand>
              
            </Container>
          </Navbar>
    </div>
  )
}

export default Header