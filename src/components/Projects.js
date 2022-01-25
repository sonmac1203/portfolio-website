import React from 'react';
import { Row, Col } from 'reactstrap';
import { List } from 'reactstrap';
import zendesk from '../photos/zendesk.jpg';
import nasa from '../photos/nasa.png';
import restaurant from '../photos/restaurant.png';

const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='mb-4 projects-title'>3. Projects</h1>
      <div className='mb-4'>
        <Row>
          <Col>
            <img src={zendesk} className='project-img' />
          </Col>
          <Col>
            <div className='project-description border'>
              <div className='d-flex justify-content-between'>
                <h6 className='ml-4 mt-4'>Personal project</h6>

                <i className='fab fa-github mr-4 mt-4'></i>
              </div>

              <h2 className='ml-4'>Zendesk Ticket Viewer</h2>
              <List className='mr-3'>
                <li>
                  An intuitive web app with React and Bootstrap components to
                  showcase customer tickets in a responsive grid of cards.
                </li>
                <li>
                  Referenced Zendesk API docs and made requests to API endpoints
                  to retrieve tickets from online portal.
                </li>
                <li>
                  Enhanced user experience with a loading component and an
                  animated error page to safeguard API failures.
                </li>
                <li>
                  Utilized Jest and React Testing Library to write 40 unit tests
                  and achieve 65% code coverage.
                </li>
              </List>
              <h6 className='ml-4'>
                Zendesk API &nbsp; &nbsp; React &nbsp; &nbsp; Bootstrap &nbsp;
                &nbsp; Reactstrap &nbsp; &nbsp; Jest &nbsp; &nbsp; Git &nbsp;
                &nbsp; Netlify
              </h6>
            </div>
          </Col>
        </Row>
      </div>
      <div className='mb-4'>
        <Row>
          <Col>
            <div className='project-description border'>
              <div className='d-flex justify-content-between'>
                <h6 className='ml-4 mt-4'>Personal project</h6>
                <div>
                  <i className='fab fa-github mr-3 mt-4'></i>
                  <i className='fas fa-external-link-alt mr-4'></i>
                </div>
              </div>
              <h2 className='ml-4'>NASALLERY</h2>
              <List className='mr-3'>
                <li>
                  Built a photo gallery web app in React with Bootstrap styling
                  to feature NASA astronomy picture of the day and showcase a
                  random selection of 50 fascinating photographs of the universe
                  in the past.
                </li>
                <li>
                  Implemented web page interactions including highlighting
                  favorite photos and generating a shareable link.
                </li>
              </List>
              <h6 className='ml-4'>
                NASA API &nbsp; &nbsp; React &nbsp; &nbsp; Bootstrap &nbsp;
                &nbsp; Reactstrap &nbsp; &nbsp; Jest &nbsp; &nbsp; Git
              </h6>
            </div>
          </Col>
          <Col>
            <img src={nasa} className='project-img' />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <img src={restaurant} className='project-img' />
          </Col>
          <Col>
            <div className='project-description border'>
              <div className='d-flex justify-content-between'>
                <h6 className='ml-4 mt-4'>Team project</h6>
                <i className='fab fa-github mr-4 mt-4'></i>
              </div>
              <h2 className='ml-4'>Restaurant Management App</h2>
              <List className='mr-3'>
                <li>
                  Led a team of 3 to build a simulated Restaurant System by
                  applying Object-Oriented Software design concepts.
                </li>
                <li>
                  Made an interactive UI with Java Swing to allow managers,
                  chefs, and customers to perform different kind of real-life
                  tasks
                </li>
                <li>
                  Designed UML diagrams to better visualize Object-Oriented
                  models and their relationships.
                </li>
                <li>
                  Organized Java classes in multiple packages and implemented
                  inheritance, abstraction, and serialization.
                </li>
              </List>
              <h6 className='ml-4'>
                Java &nbsp; &nbsp; Swing &nbsp; &nbsp; OOP &nbsp; &nbsp; Acceleo
                &nbsp; &nbsp; Papyrus &nbsp; &nbsp; Eclipse
              </h6>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Projects;
