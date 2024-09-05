import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaPlayerCardImage from '../assets/media-player-photo.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gitHub from '../assets/github-original.svg'
import linkIcon from '../assets/link-icon.svg'
import './CardLayout.css'
function ProjectCard({isInProjectPage}) {
    const isProjectPage = isInProjectPage ? true:false;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className={`border rounded shadow ${isProjectPage? "card-container-projects": "card-container-home"}`} onClick={handleShow}>
      <Card.Img variant="top" src={mediaPlayerCardImage} className={`p-1 ${isProjectPage? "card-container-project-image": "card-container-home-image"}`} />
      <Card.Body>
        <Card.Title className='text-dark text-center'>Media Player</Card.Title>
      </Card.Body>
    </Card>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img src={mediaPlayerCardImage} alt="" style={{width:"20rem"}}/>
                </Col>
                <Col md={6}>
                    <h4>Description : </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam magnam incidunt doloribus unde beatae! Blanditiis, exercitationem quasi ut ab reprehenderit quae, qui nulla eligendi illo vitae, ullam ad corrupti?</p>
                    <h4>Technologies : </h4>
                    <p>Languages : JavaScript</p>
                </Col>
            </Row>

        </Modal.Body>
        <div className='d-flex mt-3'>
            <Link className='ms-5 me-3'><img src={gitHub} alt="" /></Link>
            <Link> <img src={linkIcon}/></Link>

        </div>
        <hr/>
      </Modal>
    </>
  )
}

export default ProjectCard