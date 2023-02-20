import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Button,Container,Nav } from 'react-bootstrap';


export default function Navigation() {
  return (
    <div className='navbar'>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container> 
      <Navbar.Brand  as={Link} to='/'>
        <img
          alt=""
          src="./logo.png"
          width="50"
          height="50"
          className="d-inline-block center"
        />
        Destination Unknown
      </Navbar.Brand>
      <Nav className="buttons">
              <Nav.Link 
              as={Link} to='login'
              className="d-inline-block center">Log-in</Nav.Link>
            <Button>
              <Nav.Link as={Link} to='signup'>Sign Up!</Nav.Link>
            </Button>
          </Nav>
      </Container>
    </Navbar>
  </div>
  )
}
{/* <Button>
         Log-in 
      </Button>
      <Button>
         Sign Up! 
      </Button> */}
