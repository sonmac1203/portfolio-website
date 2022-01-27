import React from 'react';
import { Button, Container } from 'reactstrap';

const Hello = () => {
  return (
    <section id='hello'>
      <Container>
        <h5>Xin chao &#9996;, I am</h5>
        <h1 className='my-name'>Son Mac</h1>
        <h3>
          Undergrad student @ <span className='emphasized'>UArizona</span>
        </h3>
        <div className='d-flex justify-content-start mt-4 emphasized'>
          <i className='fas fa-file-alt mr-5'></i>
          <i className='fab fa-github-square mr-5'></i>
          <i className='fab fa-linkedin mr-5'></i>
          <i className='fas fa-envelope'></i>
        </div>
      </Container>
    </section>
  );
};

export default Hello;
