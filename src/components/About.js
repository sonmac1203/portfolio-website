import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import avatar from '../photos/son1.jpg';

const About = () => {
  return (
    <section id='about'>
      <Container>
        <h1>1. About me</h1>
        <Row className='d-flex justify-content-center mt-4'>
          <Col className='about-paragraph'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col className='ml-5 img-about' lg='5'>
            <img
              src='https://sonmac1203.github.io/img/sonmac1.jpeg'
              className='img-fluid avatar'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
