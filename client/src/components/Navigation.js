import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Auth from '../utils/auth';
import "../styles/navbar.css";


export default function Navigation() {
  return (
    <>
    <Navbar className="nav-container" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand  href='/'>
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
                <Nav.Link href='/profile'>Profile</Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href='login' className="d-inline-block center">Login</Nav.Link>
                <Nav.Link href='signup'>Sign Up!</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
