import React from "react";
import "./Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import lgo from "../../assets/Div [flex].png"
import str from "../../assets/Div [icon-5].png"

function Header(){
    return(
<div> <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="head">
        <Navbar.Brand href="#"><img src={lgo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
                      <Nav
            className="d-flex justify-content-end my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Demo">Demo</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Changelog">Changelog</Nav.Link>
            <Nav.Link href="#Blog">Blog
            <img src={str} className="ps-1"/>
            </Nav.Link>
          </Nav>
          <Button variant="white">Login</Button>
            <Button className="Sign-up-for-free ">
                <p className="Sign-up-for-free-font d-flex justify-content-center">Sign up for free</p></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
}
 export default Header;