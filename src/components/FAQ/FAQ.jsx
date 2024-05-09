import React from "react";
import "./FAQ.css";
import { Col, Container, Row } from "react-bootstrap";
import hr from "../../assets/Divhr [supahub-divider].png";
import stopwatch from "../../assets/Div [relative]2.png"


function FAQ() {
  return (
    <>
    <Container fluid className="bg-img">
      <Row>
        <Row>
          <Col>
            {" "}
            <Row className="road-divs">
              <p className="text-start roadmap">Frequently asked questions</p>
              <p className="public text-start">Everything you need to know</p>
              <p className="msg text-start">
                If you have anything else you want to ask,{" "}
                <samp className="reach">reach out to us.</samp>
              </p>
            </Row>
            <Row className="road-div1">
              <Col>
                <p className="head-font">What is Supahub?</p>
                <p className="msg">
                  Supahub is a customer feedback management <br />
                  platform that helps businesses collect, organize, <br />
                  and prioritize feedback from their customers.
                </p>
              </Col>
              <Col>
                <p className="head-font">Is Supahub free?</p>
                <p className="msg">
                  Yes. Supahub does come with a free plan. Paid <br />
                  plans start for only $19/month.
                </p>
              </Col>
              <Col>
                <p className="head-font">Can I vote on behalf of my users?</p>
                <p className="msg">
                  Yes, you have the ability to vote on behalf of <br />
                  your users in Supahub.
                </p>
              </Col>
            </Row>
            <Row className="road-div1">
              <Col>
                <p className="head-font">
                  How is Supahub different from other <br />
                  feedback management tools?
                </p>
                <p className="msg">
                  Supahub offers a user-friendly and intuitive <br />
                  interface, inspired by industry leaders like <br />
                  Canny.io, making it easy to collect and analyze <br />
                  customer feedback. We focus on helping you <br />
                  take action on the most important insights.
                </p>
              </Col>
              <Col>
                <p className="head-font">
                  Can I use Supahub as both an internal and <br />a public
                  feedback tool?
                </p>
                <p className="msg">
                  Yes! You can use Supahub to collect feedback <br />
                  both from your internal team and from external <br />
                  users. The platform is highly customizable so <br />
                  that you can easily change feedback board <br />
                  privacy that serves your specific needs.
                </p>
              </Col>
              <Col>
                <p className="head-font">How can I get started with Supahub?</p>
                <p className="msg">
                  To get started with Supahub, simply sign up for <br />
                  an account and begin collecting feedback from <br />
                  your customers and teammates.
                </p>
              </Col>
            </Row>
            <Row className="road-divs ">
              <Col className="pt-0">
                <p className="head-font">
                  When should I use public vs private <br />
                  boards?
                </p>
                <p className="msg">
                  Use public boards when you want open <br />
                  feedback and engagement from customers. Use <br />
                  private boards when you want to limit visibility <br />
                  to specific users or teams.
                </p>
              </Col>
              <Col>
                <p className="head-font">How much does Supahub cost?</p>
                <p className="msg">
                  Supahub offers a range of pricing plans to suit <br />
                  different needs and budgets, with plans starting <br />
                  at $19/month. But most importantly Supahub <br />
                  offers a free plan and a 10-day trial to get you
                  <br />
                  started.
                </p>
              </Col>
              <Col>
                <p className="head-font">
                  Can I customize Supahub to match my <br />
                  brand's look and feel?
                </p>
                <p className="msg">
                  Absolutely. Supahub offers customization <br />
                  options to ensure that the platform aligns with <br />
                  your brand's identity, so your customers <br />
                  experience a seamless transition.
                </p>
              </Col>
              <img src={hr} className="pt-5" />
            </Row>
            <Row>
              <Col className="d-flex justify-content-center  py-5">
                <p className="text-center">
                Prefer guesswork to build features? You guessed it.
                  <br />
                  <span className="hr"> Supahub is not for you.</span>
                  Just do the guesswork to prioritize your features.                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
    <Container fluid>
        <Row className="bg-white">
            <Col className="stopwatch d-flex justify-content-center">
            <img src={stopwatch} className="stopwatch"/></Col>
        </Row>
    </Container>
    </>

  );
}
export default FAQ;
