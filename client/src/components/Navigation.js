import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Auth from '../utils/auth';
import "../styles/navbar.css";


export default function Navigation() {
  return (
    <>
    <Navbar className="nav-container" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to='/'>
          <img
            alt=""
            src="./logo.png"
            width="50"
            height="50"
            className="d-inline-block center"
          />
          Destination Unknown
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='/login' className="d-inline-block center">Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>Sign Up!</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
