import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="footer d-flex align-items-center justify-content-evenly">
        <div style={{ width: "25rem" }}>
          <h5>
            <i className="fa-solid fa-video text-warning me-3"></i> Media Player
          </h5>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            nemo, recusandae accusantium aspernatur excepturi atque doloribus
            hic repellat. Dolorem nesciunt iure quaerat, pariatur minus sit
            laborum deleniti non repellat eum.
          </p>
        </div>
        <div className="d-flex flex-column ms-3">
          <h4>Links</h4>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Landing Page
          </Link>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <Link to="/watch" style={{ textDecoration: "none", color: "black" }}>
            Watch History
          </Link>
        </div>
        <div className="d-flex flex-column ms-3">
          <h4>Guides</h4>
          <Link
            to="https://react.dev/"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React
          </Link>
          <Link
            to="https://react-bootstrap.netlify.app/"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React Bootstrap
          </Link>
          <Link
            to="https://www.npmjs.com/package/json-server"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            JSON Server
          </Link>
        </div>
        <div className="ms-5">
          <h4>Contact us</h4>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your emailid"
            />
            <button className="btn btn-warning ms-2">Subscribe</button>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <Link style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-brands fa-x-twitter fa-2x"></i>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-brands fa-reddit fa-2x"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
