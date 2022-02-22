import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          UNIVERSITY BLOGS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/' >home</Nav.Link>
            <Nav.Link as={Link} to='/createpost' >write</Nav.Link>
            <NavDropdown title='CATEGORIES' id='collasible-nav-dropdown'>
              <NavDropdown.Item>TECHNICAL</NavDropdown.Item>
              <NavDropdown.Item>CULTURAL EVENTS</NavDropdown.Item>
              <NavDropdown.Item>STUDY</NavDropdown.Item>
              <NavDropdown.Item>SPORTS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Text
              className='text-decoration-none text-white'
              as={Link}
              to='/login'
            >
              LOGIN / SIGNUP
            </Navbar.Text>
            <Navbar.Text
              className='text-decoration-none text-white'
              as={Link}
              to='/settings'
            >
              <img alt='profile' className='rounded-circle' src='/assets/banner.jpg' style={{height:"45px",width:"45px",objectFit:"cover"}} />
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
