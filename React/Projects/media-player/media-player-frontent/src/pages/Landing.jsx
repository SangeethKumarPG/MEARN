import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <Container className="mt-5 mb-5 align-items-center justify-content-evenly w-100">
        <Row>
          <Col>
            <h3>
              Welcome To <span className="text-warning">Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt earum accusantium architecto harum, molestias dolorem,
              magni vitae vero expedita pariatur repellat optio itaque qui
              corporis non sunt deserunt natus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste commodi a necessitatibus iusto,
              quam temporibus, tenetur eligendi sunt, minima in nisi nam error
              blanditiis totam at dolore molestias rerum voluptatibus?
            </p>
            <Link to="/home">
              <button className="btn btn-warning mt-5">
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </Col>
          <Col>
            {/* <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className="ms-5" style={{height:"20rem"}} /> */}
            <img
              // src="https://i.imgur.com/pESjsss.gif"
              // src="ncs.gif"
              src="https://c.tenor.com/aqqDW0JyRWUAAAAC/tenor.gif"
              alt=""
              className="ms-5"
              style={{ height: "20rem", width: "30rem" }}
            />
          </Col>
        </Row>
      </Container>
      <div className="container mt-5 mb-5">
        <h3 className="mt-3 mb-3">Features</h3>
        <div className="cards d-flex flex-column flex-md-row align-items-center justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://c.tenor.com/x7Ra06eQY4UAAAAd/tenor.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.giphy.com/RMwgs5kZqkRyhF24KK.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWxsaHk5dXZhYmRzOTg0cHNycHN1Mzl6OGdhOTVzdXd5MXJwenM1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jP4qxu5ZskpXinpLL3/giphy.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5">
        <Row>
          <Col>
            <h3 className="mb-3">Simple and powerful</h3>
            <p>
              <span className="fs-5 fw-bolder">Play Everything : </span> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
              eum laborum quae placeat quidem fugiat tempora possimus rem totam
              id, dolore autem animi deserunt cumque aperiam doloribus adipisci
              voluptas voluptatibus?
            </p>
            <p>
              <span className="fs-5 fw-bolder">Play Everything : </span> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
              eum laborum quae placeat quidem fugiat tempora possimus rem totam
              id, dolore autem animi deserunt cumque aperiam doloribus adipisci
              voluptas voluptatibus?
            </p>
            <p>
              <span className="fs-5 fw-bolder">Play Everything : </span> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
              eum laborum quae placeat quidem fugiat tempora possimus rem totam
              id, dolore autem animi deserunt cumque aperiam doloribus adipisci
              voluptas voluptatibus?
            </p>
          </Col>
          <Col className="mt-5 d-flex flex-column flex-md-row">
            <iframe
              width="691"
              height="389"
              className="embed-responsive-16by9"
              // style={{width:"100%", height:"100%"}}
              src="https://www.youtube.com/embed/n9SkxksDuWU"
              title="BB Cooper &amp; Jake Daniels - Figure You Out"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landing;
