import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hr from "../../assets/Divhr [supahub-divider].png";
import men1 from "../../assets/Div [break-inside-avoid].png"
import men2 from "../../assets/Div [break-inside-avoid] (1).png"
import men3 from "../../assets/Div [break-inside-avoid] (2).png"
import men4 from "../../assets/Div [break-inside-avoid] (3).png"
import men5 from "../../assets/Div [break-inside-avoid] (4).png"
import men6 from "../../assets/Div [break-inside-avoid] (5).png"
import men7 from "../../assets/Div [break-inside-avoid] (6).png"
import men8 from "../../assets/Div [break-inside-avoid] (7).png"
import men9 from "../../assets/Div [break-inside-avoid] (8).png"


function Testimonial() {
  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <Row className="road-div pb-4">
              <p className="text-center roadmap">Testimonial</p>
              <p className="public text-center">Wall of Love 💜</p>
            </Row>
            <Row className="pt-5">
              <Col>
                <Row>
                  {" "}
                  <img src={men1} className="pb-3" />
                </Row>
                <Row>
                  <img src={men2} />
                </Row>
              </Col>
              <Col>
                <Row>
                  {" "}
                  <img src={men3}  className="pb-3"/>
                </Row>
                <Row>
                  <img src={men4} />
                </Row>
              </Col>
              <Col>
                <Row>
                  {" "}
                  <img src={men5}  className="pb-3"/>
                </Row>
                <Row>
                  <img src={men6} />
                </Row>
              </Col>
              <Col>
                {" "}
                <Row>
                  {" "}
                  <img src={men7}  className="pb-3"/>
                </Row>
                <Row>
                  <img src={men8}  className="pb-3"/>
                </Row>
                <Row>
                  <img src={men9} />
                </Row>
              </Col>
              <img src={hr} className="pt-5" />
            </Row>
            <Row>
              <Col className="d-flex justify-content-center  py-5">
                <p className="text-center">
                  Do you love spending hours manually tracking customer
                  feedback?
                  <br />
                  <span className="hr"> Supahub is not for you.</span> Keep
                  juggling between platforms to collect feature requests.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Testimonial;
