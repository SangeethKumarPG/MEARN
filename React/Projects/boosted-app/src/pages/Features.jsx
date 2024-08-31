import React from "react";
import Card from "react-bootstrap/Card";
import feature1 from "/features/feature1-left.png";
import feature2 from "/features/feature2-right.png";
import feature3 from "/features/feature3-right.png";
import feature4 from "/features/feature4-cropped-left.png"
import middleCover from "/features/middle-portrait.png"
import { Col, Image, Row } from "react-bootstrap";
import './CommonPageStyle.css'

function Features() {
  return (
    <>
      <div className="p-5 fade-in">
        <h2>Preserve your Time</h2>
        <Row>
          <Col xs={3}>
            <h5 className="mt-1 mb-3">
              Track the time you spend on all of your projects
            </h5>
          </Col>
          <Col xs={3}>
            <h5 className="mt-1 mb-3">Organize your projects into tasks</h5>
          </Col>
          <Col xs={3}>
            <h5 className="mt-1 mb-3">Use timers to maximise productivity</h5>
          </Col>
          <Col xs={3}>
          <h5 className="mt-1 mb-3">Keep track of your progress</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card className="rounded-5">
              <Card.Img variant="top" src={feature1} />
            </Card>
          </Col>
          <Col xs={3}>
            <Card className="rounded-5">
              <Card.Img variant="top" src={feature2} />
            </Card>
          </Col>
          <Col xs={3}>
            <Card className="rounded-5" >
              <Card.Img variant="top" src={feature3}/>
            </Card>
          </Col>
          <Col xs={3}>
            <Card className="rounded-5">
              <Card.Img variant="top" src={feature4} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <p className="mt-3">
              Organize your work and activities into projects, and easily track
              the time you spend on them.
            </p>
          </Col>
          <Col xs={3}>
            <p className="mt-3">
              If you choose to organize your projects into tasks, you will also
              be able to track the time you spend on those tasks. In order to
              make your life easier, Boosted will always show your uncompleted
              tasks first.
            </p>
          </Col>
          <Col xs={3}>
            <p className="mt-3">
                Let's you maintain focus without exhaustion for long periods of time.
            </p>
          </Col>
          <Col xs={3}>
            <p className="mt-3">
            Intuitive graphs let you check the daily and weekly amount of time you spend on your projects.
            </p>
          </Col>
        </Row>
      </div>
      <div className="fade-in" style={{backgroundColor:"whitesmoke"}}>
        <div className="d-flex align-items-center justify-content-center">
            <Image src={middleCover} fluid style={{width:"20rem", height:"40rem"}}/>
        </div>
      </div>
    </>
  );
}

export default Features;