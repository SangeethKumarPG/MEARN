import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { downloadVideo, downloadAudio } from "../services/AllApi";
import './VideoCard.css';
import { toast, ToastContainer } from 'react-toastify';

function VideoCard({ displayVideo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadYoutubeVideo = async()=>{
    const videoId = displayVideo?.youTubeLink.slice(-11);
    toast.info("Please wait for a minute for the download to start.", {
      containerId:"download-info-container"
    })
    const result = await downloadVideo(videoId);
    

  }

  const downloadMp3 = async()=>{
    const videoId = displayVideo?.youTubeLink.slice(-11);
    console.log(videoId);
    toast.info("Please wait for a minute for the download to start.", {
      containerId:"download-info-container"
    })
    const result = await downloadAudio(videoId);
  }
  return (
    <>
      <Card style={{ width: "18rem", padding: "0.5rem" }}>
        <Card.Img
          variant="top"
          // src="https://wallpapercave.com/wp/wp4806950.jpg"
          src={displayVideo?.imageUrl}
          onClick={handleShow}
        />
        <Card.Body>
          <div className="d-flex justify-content-between p-1">
            <Card.Title>{displayVideo?.caption} </Card.Title>
            <Button variant="light" className="border-0 ms-2">
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        // keyboard={false}
        // centered
        // size="lg"
        fullscreen={true}
        id="video-model"
      >
        {/* <Modal.Header closeButton>
         
        </Modal.Header> */}
        <Modal.Body >
          <div className="d-flex align-items-left justify-content-center">
          <iframe
            src={displayVideo?.youTubeLink}
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   padding:"1rem"
            // }}
            id="video-frame"
          />
          </div>
          
          <div className="d-flex align-items-left justify-content-evenly mt-3">
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={downloadMp3}>Download Audio</Button>

          <Button variant="warning" onClick={downloadYoutubeVideo}>Download Video</Button>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
      <ToastContainer containerId={'download-info-container'} autoClose={2000}/>
    </>
  );
}

export default VideoCard;
