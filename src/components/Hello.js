import React from 'react';
import { Button, Container } from 'reactstrap';

const Hello = () => {
  return (
    <section id='hello'>
      <div>
        <h5>Xin chao, I am</h5>
        <h1 className='my-name'>Son Mac</h1>
        <h3>[Put a sentence here]</h3>
        <Button className='mt-3'>Hire me!</Button>
      </div>
    </section>
  );
};

export default Hello;
