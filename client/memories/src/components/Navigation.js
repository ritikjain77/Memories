import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import img from "../images/memories.png";

function Navigation() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex flex-direction-column justify-content-center">
        <Navbar.Brand>
          <h1>Memories</h1> 
        </Navbar.Brand>
        <img
            alt=""
            src={img}
            width="50"
            height="50"
            className="align-top ml-0"
          />
      </Container>
    </Navbar>
  </>
  )
}

export default Navigation
