import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <div className='container'>
          <Navbar.Brand href="#home">Cheng Vue</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#home">Skills</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Resume</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

export default NavBar;