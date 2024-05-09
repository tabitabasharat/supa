import React from "react";
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import star from "../../assets/Icon.png";
import "./Product.css";
import bgimgpruple from "../../assets/Div [relative].png";
import star5 from "../../assets/Div [group-hover_animate-pulse].png";
import proflies from "../../assets/Image [h-12].png";
import star55 from "../../assets/Div.png";
import profile from "../../assets/Picture [w-14].png";
import profile1 from "../../assets/Image [rounded-full].png";
import profil2 from "../../assets/Image [rounded-full] (1).png";
import whoosh from "../../assets/Div [h-[480px]].png"

function Product() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <p className="text-center plateform">
              Product Feedback & Changelog Platform
            </p>
            <p className="text-center Central-hub">
              Central hub to collect <br />
              feedback & announce <br />
              product updates
            </p>
            <p className="text-center supahub-collection">
              With Supahub collect, organize and prioritize feature requests to
              better <br />
              understand customer feedback and use them to inform your product{" "}
              <br />
              roadmap.
            </p>
          </Row>
          <Row className=" ">
            <Col className="d-flex justify-content-end">
              <Button className="sign-up">
                {" "}
                <img src={star} /> Sign up for free
              </Button>
            </Col>
            <Col>
              <Button className="supa-btn  text-black">See Supahub Demo</Button>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col className="d-flex justify-content-end">
              {" "}
              <img src={proflies} />
            </Col>
            <Col>
              {" "}
              <img src={star5} />
              <p className="loved-by">loved by 200+ customers</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={bgimgpruple} className="bg-img-purple" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center div-pading">
        <Col>
          {" "}
          <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center">
              <img src={profile} className="d-flex justify-content-center" />
            </Col>
          </Row>
          <Row>
            <p className="text-center">
              " I love how simple Supahub makes it for <br />
              our users and for admins to manage user <br />
              feedback and changelog."
            </p>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img src={star55} className="d-flex justify-content-center" />
            </Col>
          </Row>
          <Row>
            <p className="d-flex justify-content-center names">
              Jackson Schaal
            </p>
          </Row>
        </Col>
        <Col>
          {" "}
          <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center">
              <img src={profile1} className="d-flex justify-content-center" />
            </Col>
          </Row>
          <Row>
            <p className="text-center">
              I dig this concept - Supahub helped us <br />
              out a ton with prioritizing customer <br />
              feedback!
            </p>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img src={star55} className="d-flex justify-content-center" />
            </Col>
          </Row>
          <Row>
            <p className="d-flex justify-content-center names">Anant Dubey</p>
          </Row>
        </Col>
        <Col>
          {" "}
          <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center">
              <img src={profil2} className="d-flex justify-content-center" />
            </Col>
          </Row>
          <Row>
            <p className="text-center">
              " direct customers where they can feel like <br />
              Our Support team loves having a place to <br />
              their voice is heard. "
            </p>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img src={star55} className="d-flex justify-content-center" />
            </Col>
          </Row>
          <Row>
            <p className="d-flex justify-content-center names">Emily Studer</p>
          </Row>
        </Col>
      </Row>
      <Row className="bg-div-color feedback">
        <Col>
          <p className="public-feedback">Public feedback portal</p>
          <p className="feedbckhub">
            Your feedback hub, <br />
            your way
          </p>
        </Col>
        <Col>
          <p>
            Public feedback portal is where users can leave feature requests and<br/>
            comments about thier ideas and feature requests for your product.<br/>
            These public portals can be customized as per your brand.<br/>
          </p>
          <Button className="sign-up explore">Explore feedback boards </Button>
        </Col>
        {/* <img/> */}
      </Row>
      <Row className="bg-div-color">
        <Col>
        <img src={whoosh} className="bg-img-purple comets p-5"/>
        </Col>
      </Row>
      <Row className="bg-div-color comets pb-5">
        <Col>
        <hr/>
        <p className="coments">Comment threads</p>
        <p>Have discussions with your users to clarify <br/>
and understand their needs.</p></Col>
        <Col>
        <hr/>
        <p className="coments">Set OpenGraph image</p>
        <p>Add an open-graph image that will show up <br/>
when you share on social media sites.</p></Col>
        <Col>
        <hr/>
        <p className="coments">Set Dark/Light theme</p>
        <p>Select theme for your public feedback portal <br/>
for consistent user experience.</p></Col>
      </Row>
    </Container>
  );
}
export default Product;
