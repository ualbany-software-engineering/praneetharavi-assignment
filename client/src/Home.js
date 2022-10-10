import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import { MDBContainer } from 'mdbreact';
import avatar from './avatar.png';

export class Home extends Component {
    render() {
        return(
            <div>
        <Navbar style={{backgroundColor: "#E6E6FA", position: "sticky"}} variant="dark" fixed="top">
        <img src={logo} className="App-logo" alt="logo" height="15" />
        Media Library
</Navbar>
  
  <div>
    <Container fluid="md">
      <Row>
          <Col>
          <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src={avatar}
        className="rounded-3"
        style={{ width: "150px",height :"150px" }}
        alt="Avatar"
      />
    </MDBContainer>
  
          </Col>
          <Col>
          <h1>Praneetha Ravi</h1>
          <p>I'm Pursuing my master's at the University of Albany. I earned my bachelor's degree in computer science and worked as a web developer for 14 months afterward.
          My interest in web development has always captivated, and I intend to pursue it.</p>
          </Col>
      </Row>
    </Container>       
  </div>
  </div>
        ); };
        }