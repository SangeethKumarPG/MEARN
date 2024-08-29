import React from "react";
import { Col, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

function RestaurantView() {
  return (
    <>
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
            <ListGroup.Item><h5 className="text-center p-2">Restaurant Name</h5></ListGroup.Item>
            <ListGroup.Item>Neighbourhood : </ListGroup.Item>
            <ListGroup.Item>Address : </ListGroup.Item>
            <ListGroup.Item>Cuisine Type : </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default RestaurantView;
