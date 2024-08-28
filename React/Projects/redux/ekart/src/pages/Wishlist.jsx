import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeItem } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";


function Wishlist() {
  const wishListItem = useSelector((state) => state.wishlistReducer);
  // console.log("===============Wishlist Items in wishlist Page =================");
  // console.log(wishListItem);
  const dispatch = useDispatch();
  const handleWishListItem = (item)=>{
    dispatch(addToCart(item));
    dispatch(removeItem(item.id));
  }
  return (
    <>
      <button className="btn btn-light mt-4 ms-4">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <i className="fa-solid fa-arrow-left me-2"></i>BACK TO HOME
        </Link>
      </button>
      <Row className="m-5 w-100">
        {wishListItem?.length > 0 ? (
          wishListItem.map((item) => (
            <Col className="m-2" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem", height: "33rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "300px" }}
                  className="p-2"
                />
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                  <Card.Text>
                    <p>{item.description.slice(0, 80)}...</p>
                    <p className="fw-bolder text-center">
                      Price : ${item.price}
                    </p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      variant="outline-danger"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                    <Button variant="outline-success" onClick={()=>handleWishListItem(item)}>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div style={{height:"100vh"}} className="d-flex align-items-center flex-column">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"></img>
          </div>
        )}
      </Row>
    </>
  );
}

export default Wishlist;
