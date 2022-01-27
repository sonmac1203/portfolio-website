import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar d-flex justify-content-center mt-3'>
      <div>
        {' '}
        <a href='#about'>About</a>
      </div>
      <div className='ml-4'>
        <a href='#experiences'>Experiences</a>
      </div>
      <div className='ml-4'>
        {' '}
        <a href='#projects'>Projects</a>
      </div>
      <div className='ml-4'>
        {' '}
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
