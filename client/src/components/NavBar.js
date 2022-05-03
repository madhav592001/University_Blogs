import React, { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { getAllCategories } from '../redux/actions/categoriesActions';
import { logout } from '../redux/actions/authActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  const { isLogin } = loginState;
  const allCategories = useSelector((state) => state.allCategories);
  const { loading, categories } = allCategories;

  console.log(categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  function handleSubmit(e){
    e.preventDefault() ; 
    dispatch(logout()) ; 
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          YOUR BLOGS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              home
            </Nav.Link>
            <Nav.Link as={Link} to='/createpost'>
              write
            </Nav.Link>
            <NavDropdown title='CATEGORIES' id='collasible-nav-dropdown'>
              {loading ? (
                <div className='d-flex justify-content-center mt-5'>
                  <Spinner animation='border' role='status'>
                    <span>Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <>
                  <NavDropdown.Item>TECHNICAL</NavDropdown.Item>
                  <NavDropdown.Item>CULTURAL EVENTS</NavDropdown.Item>
                  <NavDropdown.Item>STUDY</NavDropdown.Item>
                  <NavDropdown.Item>SPORTS</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
          <Nav>
            {isLogin ? (
              <div>
              <Navbar.Text
                className='text-decoration-none text-white'
                as={Link}
                to='/settings'
              >
                <img
                  alt='profile'
                  className='rounded-circle'
                  src='/assets/banner.jpg'
                  style={{ height: '45px', width: '45px', objectFit: 'cover' }}
                />
              </Navbar.Text>
              <Button variant="danger" className="px-1 py-1 mx-2 rounded" onClick={handleSubmit} >Logout</Button>
              </div>
            ) : (
              <Navbar.Text
                className='text-decoration-none text-white'
                as={Link}
                to='/login'
              >
                LOGIN / SIGNUP
              </Navbar.Text>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
