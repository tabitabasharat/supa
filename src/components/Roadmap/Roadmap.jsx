import React from "react";
import "./Roadmap.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import roadmapimg from "../../assets/Image [object-center1].png";
import add from "../../assets/Div [h-full].png";
import custom from "../../assets/Div [h-full] (1).png";
import maintain from "../../assets/Div [h-full] (2).png";
import hr from "../../assets/Divhr [supahub-divider].png";
import Prioritization from "../../assets/Div [supahub-card-img].png";

function Roadmap() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row className="road-div">
            <p className="text-center roadmap">Product roadmap tool</p>
            <p className="public text-center">
              Public roadmap to show what <br />
              you're working on next
            </p>
            <p className="msg text-center">
              All the features of product feedback tool you need to easily
              <br />
              centralize product feedback from your customers and use that
              <br />
              feedback to build better products.
            </p>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img src={roadmapimg} className="road-img" />
            </Col>
          </Row>
          <Row className="div-cols">
            <Col className="div-cols d-flex justify-content-center">
              <img src={add} />

              <img src={custom} />

              <img src={maintain} />
            </Col>
            <img src={hr} />
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="text-center">
                Prefer spreadsheets to prioritize your roadmap?
                <br />
                <span className="hr"> Supahub is not for you.</span> Get Google
                Sheet to manage feature requests.
              </p>
            </Col>
          </Row>
          <Row className="prior">
            <Col className="d-flex justify-content-center">
              <img src={Prioritization} />
            </Col>
            <Col>
              <p className="feature">Prioritize Feature Requests</p>
              <p className="public">
                Prioritization tool to <br />
                help you build most <br />
                needed features
              </p>
              <p className="msg">
                Easily prioritize feature requests using a customizable <br />
                framework. Sort, filter, and collaborate on high-priority <br />
                items to streamline your product roadmap and meet <br />
                customer expectations efficiently.
              </p>
              <Button className="sign-up explore">
                Explore product roadmap
              </Button>
            </Col>
          </Row>
          <Row className="prior">
            <Col className="d-flex flex-column">
              <p className="features">Product Changelog & Release Notes</p>
              <p className="public">
                Announce new <br />
                features with <br />
                product changelog
              </p>
              <p className="msg">
                Whether you're launching new features or making <br />
                improvements to existing functionality, product <br />
                changelog makes it easy to keep your customers up-to-
                <br />
                date on your progress.
              </p>
              <Button className="sign-up explore">
                Explore product roadmap
              </Button>
            </Col>
            <Col>
              <img src={Prioritization} />
            </Col>
            <img src={hr} />
          </Row>
          <Row>
            <Col className="d-flex justify-content-center pb-5">
              <p className="text-center">
                Got time and patience to collect feedback from different
                channels?
                <br />
                <span className="hr"> Supahub is not for you.</span>
                Get bogged down gathering feedback through all your channels.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Roadmap;
