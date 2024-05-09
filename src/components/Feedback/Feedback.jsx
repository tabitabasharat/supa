import React from "react";
import "./Feedback.css";
import { Col, Container, Row } from "react-bootstrap";
import features from "../../assets/Div [flex]box.png";
import Featureprioritization from "../../assets/Div [h-full] (11).png";
import privacy from "../../assets/Div [h-full]12.png";
import Merge from "../../assets/Div [h-full] (1).png";
import hr from "../../assets/Divhr [supahub-divider].png";
import comets from "../../assets/Image [w-10].png";
import pin from "../../assets/Image [w-10] (5).png"
import hide from "../../assets/Image [w-10] (4).png"
import pen from "../../assets/Image [w-10] (3).png"
import envelop from "../../assets/Image [w-10] (2).png"
import thumbsup from "../../assets/Image [w-10] (1).png"

function Feedback() {
  return (
    <Container>
      <Row>
        <Row>
          <Col>
            {" "}
            <Row className="road-div">
              <p className="text-center roadmap">Feedback tool features</p>
              <p className="public text-center">See all features</p>
              <p className="msg text-center">
                All the features of product feedback tool you need to easily{" "}
                <br />
                centralize product feedback from your customers and use that{" "}
                <br />
                feedback to build better products.
              </p>
            </Row>
            <Row className="py-5">
              <img src={features} />
            </Row>
            <Row>
              <Col>
                {" "}
                <img src={privacy} />
              </Col>
              <Col>
                {" "}
                <img src={Featureprioritization} />
              </Col>
              <Col>
                {" "}
                <img src={Merge} />
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className="div-sty">
              <Col>
                <Row>
                  <Col className="d-flex div-wid ">
                    {" "}
                    <img src={comets} className="pe-3" />
                    {/* </Col>
                  <Col> */}
                    <Row>
                      <p className="heade">Link feedback to customers</p>
                      <p>
                        Automatically fetch the right customer <br />
                        or create a new one.
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="d-flex div-wid ">
                    {" "}
                    <img src={thumbsup} className="pe-3" />
                    {/* </Col>
                  <Col> */}
                    <Row>
                      <p className="heade">Upvotes & Downvotes</p>
                      <p>
                        Votes helps you see which feedback <br />
                        is popular among your users.
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                {" "}
                <Row>
                  <Col className="d-flex div-wid ">
                    {" "}
                    <img src={envelop} className="pe-3" />
                    {/* </Col>
                  <Col> */}
                    <Row>
                      <p className="heade">Subscribe users for updates</p>
                      <p>
                        Let users subscribe for updates and <br />
                        get notified when there's an update.
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="div-sty">
              <Col>
                <Row>
                  <Col className="d-flex div-wid ">
                    {" "}
                    <img src={pen} className="pe-3" />
                    {/* </Col>
                  <Col> */}
                    <Row>
                      <p className="heade">Post on behalf</p>
                      <p>
                        Allows your customer support team to <br />
                        post on behalf of your users.
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="d-flex div-wid ">
                    {" "}
                    <img src={hide} className="pe-3" />
                    {/* </Col>
                  <Col> */}
                    <Row>
                      <p className="heade">Hide posts</p>
                      <p>
                        Hide posts if they're not relevant to <br />
                        your product.
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                {" "}
                <Row>
                  <Col className="d-flex div-wid ">
                    {" "}
                    <img src={pin} className="pe-3" />
                    {/* </Col>
                  <Col> */}
                    <Row>
                      <p className="heade">Pin posts & comments</p>
                      <p>
                        Pin posts and comments so they stay <br />
                        at the top of your board!
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <img src={hr} className="mt-5" />
            <Row>
              <Col className="d-flex justify-content-center  py-5">
                <p className="text-center">
                  You know what your customers want?
                  <br />
                  <span className="hr"> Supahub is not for you.</span>
                  Just build random features for your product.{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Feedback;
