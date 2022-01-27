import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar d-flex justify-content-center mt-3'>
      <div>
        {' '}
        <a href='#about' className='ordinary-link'>
          About
        </a>
      </div>
      <div className='ml-4'>
        <a href='#experiences' className='ordinary-link'>
          Experiences
        </a>
      </div>
      <div className='ml-4'>
        {' '}
        <a href='#projects' className='ordinary-link'>
          Projects
        </a>
      </div>
      <div className='ml-4'>
        <a href='#contact' className='ordinary-link'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
