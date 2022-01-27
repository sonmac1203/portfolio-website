import React from 'react';
import { Card, CardTitle, CardText, Button, List, Container } from 'reactstrap';

const Experiences = () => {
  return (
    <section id='experiences'>
      <Container>
        <h2 className='mb-5 element-name'>
          Where I've Learned and Worked &#129309;
        </h2>
        <div className='exp-item mb-5'>
          <h4 className='ml-3 experience-title'>
            Software Engineer Intern @{' '}
            <span className='emphasized'>Skipli</span>
          </h4>
          <h6 className='ml-3 mb-4'>Jan 2022 - Present</h6>
          <List className='exp-list'>
            <li>
              Work with colleagues to design operational, scalable, and
              easy-to-use tech solutions for culinary businesses.
            </li>
            <li>
              Integrate social media platforms to client dashboard, allowing
              content management in one place.
            </li>
            <li>
              Build an intuitive user interface using React and utilize Firebase
              Realtime Database to store and access user data.
            </li>
          </List>
        </div>
        <div className='exp-item mb-5'>
          <h4 className='ml-3 experience-title'>
            Undergraduate Lab Assistant @{' '}
            <span className='emphasized'>UArizona</span>
          </h4>
          <h6 className='ml-3 mb-4'>Aug 2020 - Present</h6>
          <List className='exp-list'>
            <li>
              Facilitate weekly lab sessions and office hours to help students
              with programming concepts and troubleshoot their C code.
            </li>
            <li>
              Assist instructors with coding assignments and exam grading using
              Visual Studio 2019.
            </li>
          </List>
        </div>
        <div className='exp-item'>
          <h4 className='ml-3 experience-title'>
            Undergraduate Teaching Assistant @{' '}
            <span className='emphasized'>UArizona</span>
          </h4>
          <h6 className='ml-3 mb-4'>Aug 2020 - Jan 2021</h6>
          <List className='exp-list'>
            <li>
              Organized weekly class meetings to assist students in
              understanding materials and practicing Math skills.
            </li>
            <li>
              Encouraged group discussions by promoting open-ended questions,
              offering hints, and elaborating on examples.
            </li>
            <li>
              Collaborated with other Teaching Assistants to oversee classrooms
              and proctor exams.
            </li>
          </List>
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
