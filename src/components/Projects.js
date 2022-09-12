import React from 'react';
import { Row, Col, Container, Badge } from 'reactstrap';
import { List } from 'reactstrap';
import projects from '../config/projects.json';
import betweenUs from '../assets/betweenUs.png';
import allinone from '../assets/all-in-one.png';
import restaurant from '../assets/restaurant.png';

const Projects = () => {
  const images = [betweenUs, allinone, restaurant];
  return (
    <section id='projects'>
      <Container>
        <h2 className='mb-5 element-name d-flex justify-content-center'>
          What I've Worked On &#9997;
        </h2>
        {projects.map((p, k) => (
          <ProjectItem
            key={k}
            img={images[k]}
            isOdd={k % 2 === 0}
            badge={p.badge}
            githubUrl={p.githubURL}
            demoUrl={p.demoUrl}
            title={p.title}
            description={p.description}
            skills={p.skills}
            last={k === projects.length - 1}
          />
        ))}
        {/* <div className='mb-5'>
          <Row>
            <Col xl='6' className='order-xl-1 mb-2'>
              <img
                src='https://www.w3schools.com/images/picture.jpg'
                className='project-img'
                alt='zendesk ticket viewer demo'
              />
            </Col>
            <Col xl='6' className='order-xl-2'>
              <div className='project-description-odd'>
                <div className='d-flex justify-content-between'>
                  <Badge className='ml-4 mt-4 mb-3 project-badge'>
                    #personal
                  </Badge>

                  <a
                    href='https://github.com/sonmac1203/Zendesk_Ticket_Viewer_Version2'
                    target='_blank'
                    className='ordinary-link'
                  >
                    <i className='fab fa-github mr-4 mt-4'></i>
                  </a>
                </div>

                <h3 className='ml-4 mb-4 project-name'>
                  Zendesk Ticket Viewer
                </h3>
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
                <h6 className='ml-4 mb-4 mr-4 mt-4 project-tech'>
                  Zendesk API &nbsp; &nbsp; React &nbsp; &nbsp; Bootstrap &nbsp;
                  &nbsp; Reactstrap &nbsp; &nbsp; Jest &nbsp; &nbsp; Netlify
                </h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mb-5'>
          <Row>
            <Col xl='6' className='order-xl-2 mb-2'>
              <img src={nasa} className='project-img' alt='nasallery demo' />
            </Col>
            <Col xl='6' className='order-xl-1'>
              <div className='project-description-even'>
                <div className='d-flex justify-content-between'>
                  <Badge className='ml-4 mt-4 mb-3 project-badge'>
                    #personal
                  </Badge>
                  <div>
                    <a
                      href='https://github.com/sonmac1203/NASA-Gallery'
                      target='_blank'
                      className='ordinary-link'
                    >
                      <i className='fab fa-github mr-3 mt-4'></i>
                    </a>
                    <a
                      href='https://ki0z4.csb.app/'
                      target='_blank'
                      className='ordinary-link'
                    >
                      <i className='fas fa-external-link-alt mr-4'></i>
                    </a>
                  </div>
                </div>
                <h3 className='ml-4 mb-4 project-name'>NASALLERY</h3>
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
                <h6 className='mx-4 my-4 project-tech'>
                  NASA API &nbsp; &nbsp; React &nbsp; &nbsp; React Router &nbsp;
                  &nbsp; Reactstrap &nbsp; &nbsp; Git
                </h6>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col xl='6' className='order-xl-1 mb-2'>
              <img
                src={restaurant}
                className='project-img'
                alt='restaurant system demo'
              />
            </Col>
            <Col xl='6' className='order-xl-2'>
              <div className='project-description-odd'>
                <div className='d-flex justify-content-between'>
                  <Badge className='ml-4 mt-4 mb-3 project-badge'>#team</Badge>
                  <a
                    href='https://github.com/sonmac1203/Restaurant_System'
                    target='_blank'
                    className='ordinary-link'
                  >
                    <i className='fab fa-github mr-4 mt-4'></i>
                  </a>
                </div>
                <h3 className='ml-4 mb-4 project-name'>
                  Restaurant Management App
                </h3>
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
                <h6 className='mx-4 my-4 project-tech'>
                  Java &nbsp; &nbsp; Swing &nbsp; &nbsp; Acceleo &nbsp; &nbsp;
                  Papyrus &nbsp; &nbsp; Eclipse
                </h6>
              </div>
            </Col>
          </Row>
        </div> */}
      </Container>
    </section>
  );
};

const ProjectItem = ({
  img,
  isOdd,
  badge,
  githubUrl,
  demoUrl,
  title,
  description,
  skills,
  last,
}) => {
  return (
    <div className={!last ? 'mb-5' : ''}>
      <Row>
        <Col xl='6' className={isOdd ? 'order-xl-1 mb-2' : 'order-xl-2 mb-2'}>
          <img src={img} className='project-img' alt={title} />
        </Col>
        <Col xl='6' className={isOdd ? 'order-xl-2' : 'order-xl-1'}>
          <div
            className={
              isOdd ? 'project-description-odd' : 'project-description-even'
            }
          >
            <div className='d-flex justify-content-between'>
              <Badge className='ml-4 mt-4 mb-3 project-badge'>
                {'#' + badge}
              </Badge>
              <a href={githubUrl} target='_blank' className='ordinary-link'>
                <i className='fab fa-github mr-4 mt-4'></i>
              </a>
              {demoUrl && (
                <a href={demoUrl} target='_blank' className='ordinary-link'>
                  <i className='fas fa-external-link-alt mr-4'></i>
                </a>
              )}
            </div>
            <h3 className='ml-4 mb-4 project-name'>{title}</h3>
            <List className='mr-3 ml-4' type='unstyled'>
              {description.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </List>
            <h6 className='ml-4 mb-4 mr-4 mt-4 project-tech'>
              {skills.map((skill, k) => {
                return (
                  <>
                    {skill}
                    {k === skill.length - 1 ? '' : <> &nbsp; &nbsp; </>}
                  </>
                );
              })}
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
