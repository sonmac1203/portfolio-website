import React from 'react';
import { Container } from 'reactstrap';
import resume from '../assets/Resume_SonMac.pdf';

const Hello = () => {
  return (
    <section id='hello'>
      <Container>
        <h5>Xin chao &#9996;, I am</h5>
        <h1 className='my-name'>Son Mac</h1>
        <h3>
          Undergrad @ <span className='emphasized'>UArizona</span> | Former
          Intern @<span className='emphasized'> Shopify</span> | Developer @
          <span className='emphasized'> KMAP Arizona</span>
        </h3>
        <div className='d-flex justify-content-start mt-4 emphasized'>
          <a href={resume} target='_blank' className='ordinary-link'>
            <i className='fas fa-file-alt mr-5'></i>
          </a>
          <a
            href='https://github.com/sonmac1203'
            target='_blank'
            className='ordinary-link'
          >
            <i className='fab fa-github-square mr-5'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/sonmac1203/'
            target='_blank'
            className='ordinary-link'
          >
            <i className='fab fa-linkedin mr-5'></i>
          </a>
          <a href='mailto:mactranthienson@gmail.com' className='ordinary-link'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hello;
