import React from "react";
import { Col, ListGroupItem, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import './RestaurantView.css'

function RestaurantView() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="rv-body">
      <Row className="mt-5 mb-5">
        <Col md={1}></Col>
        <Col md={3}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWGa7nz-J8ZfjAVxPSsPdXwLJw1ajyWAEmQ&s"
            alt=""
            width={"100%"}
            height={"100%"}
            className="rounded"
          />
        </Col>
        <Col md={7} className="px-5">
          <hr />
          <h5 className="text-center">
            Restaurant <span className="text-warning">Details</span>
          </h5>
          <hr />
          <ListGroup>
            <ListGroup.Item>
              <h5 className="text-center p-2">Restaurant Name</h5>
            </ListGroup.Item>
            <ListGroup.Item>Neighbourhood : </ListGroup.Item>
            <ListGroup.Item>Address : </ListGroup.Item>
            <ListGroup.Item>Cuisine Type : </ListGroup.Item>
            <ListGroup.Item className="text-center p-3 mb-2">
              <button className="btn btn-warning my-2" onClick={handleShow}>
                Operating Hours
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    <ListGroup.Item>Monday : </ListGroup.Item>
                    <ListGroup.Item>Tuesday : </ListGroup.Item>
                    <ListGroup.Item>Wednesday : </ListGroup.Item>
                    <ListGroup.Item>Thursday : </ListGroup.Item>
                    <ListGroup.Item>Friday : </ListGroup.Item>
                    <ListGroup.Item>Saturday : </ListGroup.Item>
                    <ListGroup.Item>Sunday : </ListGroup.Item>
                  </ListGroup>
                </Modal.Body>
              </Modal>
              <button
                className="btn btn-warning ms-3 my-2"
                onClick={() => setOpen(!open)}
              >
                Click to see reviews
              </button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={7}>
          <Collapse in={open}>
            <div className="mt-2">
              <hr />
              <h6>Name and date</h6>
              <p>Rating : </p>
              <p>Description : </p>
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
}

export default RestaurantView;
