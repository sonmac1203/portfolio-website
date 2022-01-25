import React from 'react';
import { Card, CardTitle, CardText, Button, List } from 'reactstrap';

const Experiences = () => {
  return (
    <section id='experiences'>
      <h1 className='mb-4'>2. Experiences and Education</h1>
      <div className='exp-first'>
        <h4 className='ml-3'>Software Engineer Intern @ Skipli</h4>
        <h6 className='ml-3'>Jan 2022 - Present</h6>
        <List>
          <li>
            Work directly with CEO to design solutions that are operational,
            scalable, and easy-to-use for local restaurants and their customers.
          </li>
          <li>
            Integrate social media platforms (Facebook, Instagram, Yelp) to
            client dashboard, allowing content management in one place.
          </li>
          <li>
            Build an intuitive user interface using React and utilize Firebase
            Realtime Database to store and access user data.
          </li>
        </List>
      </div>
      <div className='exp-second'>
        <h4 className='ml-3'>Undergraduate Lab Assistant @ UArizona</h4>
        <h6 className='ml-3'>Aug 2020 - Present</h6>
        <List>
          <li>
            Facilitate weekly lab sessions and office hours to help students
            understand basic programming concepts and troubleshoot their C code.
          </li>
          <li>
            Assist instructors with coding assignments and exam grading using
            Visual Studio 2019.
          </li>
        </List>
      </div>
      <div className='exp-third'>
        <h4 className='ml-3'>Undergraduate Teaching Assistant @ UArizona</h4>
        <h6 className='ml-3'>Aug 2020 - Jan 2021</h6>
        <List>
          <li>
            Organized weekly class meetings to assist over 20 students in
            understanding materials and practicing Math problem-solving skills.
          </li>
          <li>
            Encouraged group discussions by promoting open-ended questions and
            offering hints to help students arrive at correct answers.
          </li>
          <li>
            Collaborated with other Teaching Assistants to oversee classrooms
            and proctor exams.
          </li>
        </List>
      </div>
    </section>
  );
};

export default Experiences;
