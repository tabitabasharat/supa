import React from "react";
import "./Footer.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import showcase from "../../assets/Div [relative] (Mask Group)23.png";
import hr from "../../assets/Divhr [supahub-divider].png";
import logo from "../../assets/Image [w-10]212.png";
import social from "../../assets/Div [inline-flex].png";
import str from "../../assets/Div [icon-sm].png";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <img src={showcase} />
          </Row>
          <img src={hr} className="py-5" />

          <Row>
            <Col>
              <Row>
                {" "}
                <img src={logo} className="logo mb-2" />
              </Row>
              <Row>
                <p className="txt">
                  Supahub is a product feedback tool that helps <br />
                  you understand what your customers really <br />
                  want, and make better product decisions.
                </p>
              </Row>
            </Col>
            <Col className="d-flex justify-content-end pt-4">
              <Button className="signup-free text-white">
                Sign up for free
              </Button>
            </Col>
          </Row>
          <img src={hr} className="py-4" />

          <Row>
            <Col>
              <p className="headerr">Product</p>
              <p className="teext">Pricing</p>
              <p className="teext">View Demo</p>
              <p className="teext">Changelog</p>
              <p className="teext">Our Roadmap</p>
            </Col>
            <Col>
              <p className="headerr">Features</p>
              <p className="teext">Feedback Boards</p>
              <p className="teext">Product Roadmap</p>
              <p className="teext">Product Changelog</p>
              <p className="teext">All Features</p>
            </Col>
            <Col>
              <p className="headerr">Resources</p>
              <p className="teext">Blog</p>
              <p className="teext">Glossary</p>
              <p className="teext">Request a feature</p>
              <p className="teext">Developer docs</p>
            </Col>
            <Col>
              <p className="headerr">Policies</p>
              <p className="teext">Privacy Policy</p>
              <p className="teext">Terms of Service</p>
              <p className="teext">All Legal</p>
            </Col>
            <Col>
              <p className="headerr">Compare</p>
              <p className="teext">Alternative to Canny.io</p>
              <p className="teext">Alternative to Beamer</p>
              <p className="teext">Alternative to Nolt.io</p>
              <p className="teext">Alternative to Uservoice</p>
              <p className="teext">Alternative to Trello</p>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col>
              <p>
                {" "}
                <img src={str} />
                Copyright © 2024 Supahub. All rights reserved.
              </p>
            </Col>
            <Col className="d-flex justify-content-end">
              <img src={social} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
