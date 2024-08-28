import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Home() {
  const response = useFetch("https://fakestoreapi.com/products");
  // console.log(response);
  const dispatch = useDispatch();
  const wishListItems = useSelector((state)=>state.wishlistReducer);
  console.log(wishListItems);
  return (
    <>
      <Row className="m-5 w-100">
        {response?.length > 0 ? (
          response.map((item) => (
            <Col className="m-2" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem", height:"35rem"}}>
                <Card.Img variant="top" src={item.image} style={{height:"300px"}} className="p-2"/>
                <Card.Body>
                  <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0,80)}...</p>
                    <p className="fw-bolder text-center">Price : ${item.price}</p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="outline-danger" onClick={()=>dispatch(addToWishList(item))} disabled={wishListItems.some(wishListItem => item.id === wishListItem.id)}
                      style={wishListItems.some(wishListItem => item.id === wishListItem.id)? {backgroundColor:"red", color:"white"}:{}}>
                      <i class="fa-regular fa-heart" ></i>
                    </Button>
                    <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div>
            <p>No item found</p>
          </div>
        )}
      </Row>
    </>
  );
}

export default Home;
