import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo image"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Destination Unknown
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="#log-in">Log-in</Nav.Link>
            <Nav.Link href="/sign-up">Sign-up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
>>>>>>> origin
