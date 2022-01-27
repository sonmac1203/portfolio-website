import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { List } from 'reactstrap';
import zendesk from '../photos/zendesk.jpg';
import nasa from '../photos/nasa.png';
import restaurant from '../photos/restaurant.png';

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <h2 className='mb-5 element-name'>Projects</h2>
        <div className='mb-5'>
          <Row>
            <Col xl='6' className='order-xl-1'>
              <img src={zendesk} className='project-img' />
            </Col>
            <Col xl='6' className='order-xl-2'>
              <div className='project-description border'>
                <div className='d-flex justify-content-between'>
                  <h6 className='ml-4 mt-4'>Personal project</h6>

                  <i className='fab fa-github mr-4 mt-4'></i>
                </div>

                <h3 className='ml-4'>Zendesk Ticket Viewer</h3>
                <List className='mr-3 ml-4' type='unstyled'>
                  <li>
                    An intuitive web app with React and Bootstrap components to
                    showcase customer tickets in a responsive grid of cards. The
                    page was created using an endpoint from Zendesk API that
                    supports retrieving tickets from a customer's online portal
                  </li>
                  <li>
                    Enhanced user experience with a loading component and an
                    animated error page to safeguard API failures.
                  </li>
                </List>
                <h6 className='ml-4 mb-4'>
                  Zendesk API &nbsp; &nbsp; React &nbsp; &nbsp; Bootstrap &nbsp;
                  &nbsp; Reactstrap &nbsp; &nbsp; Jest &nbsp; &nbsp; Netlify
                </h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mb-4'>
          <Row>
            <Col xl='6' className='order-xl-2'>
              <img src={nasa} className='project-img' />
            </Col>
            <Col xl='6' className='order-xl-1'>
              <div className='project-description border'>
                <div className='d-flex justify-content-between'>
                  <h6 className='ml-4 mt-4'>Personal project</h6>
                  <div>
                    <i className='fab fa-github mr-3 mt-4'></i>
                    <i className='fas fa-external-link-alt mr-4'></i>
                  </div>
                </div>
                <h3 className='ml-4'>NASALLERY</h3>
                <List className='mr-3 ml-4 type="unstyled"' type='unstyled'>
                  <li>
                    I built a photo gallery web app in React with Bootstrap
                    styling to feature NASA astronomy picture of the day and
                    showcase a random selection of 50 fascinating photographs of
                    the universe in the past.
                  </li>
                  <li>
                    Implemented web page interactions including highlighting
                    favorite photos and generating a shareable link.
                  </li>
                </List>
                <h6 className='ml-4 mb-4'>
                  NASA API &nbsp; &nbsp; React &nbsp; &nbsp; React Router &nbsp;
                  &nbsp; Bootstrap &nbsp; &nbsp; Reactstrap &nbsp; &nbsp; Git
                </h6>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col xl='6'>
              <img src={restaurant} className='project-img' />
            </Col>
            <Col xl='6'>
              <div className='project-description border'>
                <div className='d-flex justify-content-between'>
                  <h6 className='ml-4 mt-4'>Team project</h6>
                  <i className='fab fa-github mr-4 mt-4'></i>
                </div>
                <h3 className='ml-4'>Restaurant Management App</h3>
                <List className='mr-3 ml-4' type='unstyled'>
                  <li>
                    A semester long project in an OOP course where I led a team
                    of 3 to build a simulated Restaurant System that allows
                    managers, chefs, and customers to perform different kinds of
                    real-life task such as hiring new staff and ordering food.
                  </li>
                  <li>
                    We also created an interactive UI with Java Swing library
                    for better visualization and scalability
                  </li>
                </List>
                <h6 className='ml-4 mb-4'>
                  Java &nbsp; &nbsp; Swing &nbsp; &nbsp; OOP &nbsp; &nbsp;
                  Acceleo &nbsp; &nbsp; Papyrus &nbsp; &nbsp; Eclipse
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
