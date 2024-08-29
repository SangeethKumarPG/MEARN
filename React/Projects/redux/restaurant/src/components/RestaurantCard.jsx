import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function RestaurantCard() {
  return (
    <>
      <Link to="/restaurant_view" style={{textDecoration:"none"}}>
        <Card style={{ width: "18rem" }} className="p-2 shadow">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWGa7nz-J8ZfjAVxPSsPdXwLJw1ajyWAEmQ&s"
          />
          <Card.Body>
            <Card.Title className="text-center text-warning">
              Card Title
            </Card.Title>
            <Card.Text>
              Neighbourhood : <span>Location</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default RestaurantCard;
