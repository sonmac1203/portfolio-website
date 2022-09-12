import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import avatar from '../assets/avatar.jpg';

const About = () => {
  return (
    <section id='about'>
      <Container>
        <h2 className='element-name'>Who I am &#9995;</h2>
        <Row className='mt-4'>
          <Col className='about-paragraph mb-4' lg='7'>
            <p className='mb-4'>
              Hi there! My name is <span className='emphasized'>Son Mac</span>.
              I am a <span className='emphasized'>fourth-year</span>{' '}
              undergraduate in{' '}
              <span className='emphasized'>
                Electrical &#38; Computer Engineering
              </span>{' '}
              at the <span className='emphasized'>University of Arizona</span>.
              Entering college senior year, I have found myself really
              interested in{' '}
              <span className='emphasized'>software development</span>,
              especially in the <span className='emphasized'>frontend</span>{' '}
              domain, so I am now doing my best to pursue a career in this field
              later in the future.
            </p>
            <p className='mb-4'>
              I enjoy coding and have been taking courses to further my
              understanding about programming principles, algorithms, and Web
              technologies. I started my journey with{' '}
              <span className='emphasized'>C</span>, fell in love with
              object-oriented <span className='emphasized'>C++</span>,{' '}
              <span className='emphasized'>Java</span>,{' '}
              <span className='emphasized'>Python</span>, and am now working
              with <span className='emphasized'>HTML</span>,{' '}
              <span className='emphasized'>CSS</span>, and{' '}
              <span className='emphasized'>JS</span> on a regular basis.
            </p>
            <p>
              Currently, I am looking for fulltime opportunities in{' '}
              <span className='emphasized'>
                software engineer / frontend engineer
              </span>{' '}
              for Summer and Fall 2023. Feel free to check out my resume and I
              am always ready for a chat!
            </p>
          </Col>
          <Col className='img-about' lg='5'>
            <img
              src={avatar}
              className='img-fluid avatar'
              alt='A photo of me'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
