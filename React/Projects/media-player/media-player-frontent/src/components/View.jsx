import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getAllVideos } from "../services/AllApi";
import { Col, Row } from "react-bootstrap";

function View() {
  const [allVideos, setAllVideos] = useState([]);
  const getVideos = async () => {
    const response = await getAllVideos();
    const { data } = response;
    console.log(data.length);
    setAllVideos(data);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <>
      <Row>
        {allVideos.length > 0 ? (
          allVideos?.map((videos) => (
            <Col sm={8} md={6} lg={3} xs={12} className="mt-1 mb-1">
              <VideoCard displayVideo={videos} />
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default View;
