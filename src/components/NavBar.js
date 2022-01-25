import React from 'react';
import { Navbar, Nav, NavItem, NavbarText, Collapse } from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar color='light' expand='md' light>
        <Collapse navbar>
          <Nav className='me-auto' navbar>
            <NavItem>Components</NavItem>
            <NavItem>GitHub</NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
