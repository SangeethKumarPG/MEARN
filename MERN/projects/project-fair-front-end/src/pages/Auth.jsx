import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import logoDark from "/projectfairlogo.svg";

function Auth({ register }) {
  const registerForm = register ? true : false;
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div className="container w-75">
          <h5>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "bolder",
                color: "black",
              }}
            >
              BACK TO HOME →
            </Link>
          </h5>
          <div>
            <Row>
              <Col md={6}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/013/159/013/small_2x/flat-business-technology-cloud-computing-service-and-file-upload-backup-on-cloud-server-storage-with-web-login-security-user-concept-outline-design-style-minimal-illustration-vector.jpg"
                  alt=""
                  style={{ width: "33rem", height:"30rem" }}
                />
              </Col>
              <Col md={6} className="bg-primary p-3 rounded shadow">
                <form>
                  <h5 className="d-flex align-items-center justify-content-center">
                    <img src={logoDark} /> Project Fair
                  </h5>
                  {registerForm ? (
                    <>
                      <h6 className="text-center">Signup</h6>
                      <input type="text" className="form-control rounded" placeholder="Name"/>
                      
                    </>
                  ) : (
                    <>
                      <h6 className="text-center">Login</h6>
                    </>
                  )}
                  <div className="mt-3 mb-3">
                  <input type="text" className="form-control rounded" placeholder="Email"/>
                  </div>
                  <div className="mt-3 mb-3">
                  <input type="password" className="form-control rounded" placeholder="Password"/>
                  </div>
                  {registerForm ? 
                    <div>
                      <button className="btn btn-success form-control">Register</button>
                      <p className="text-center">Already a user? click here to <Link className="ms-2" to="/login" style={{textDecoration:"none"}}>login</Link></p>
                    </div>
                    :
                    <div>
                      <button className="btn btn-success form-control">Login</button>
                      <p className="text-center">Not registered yet? click here to <Link className="ms-2" to="/register" style={{textDecoration:"none"}}>register</Link></p>
                    </div>
                
                  }
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
