import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/navBar.css' 

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" className='fixed-top'>
        <div className='container'>
          <a href="/" className='navbar-brand'>
            <div className='name'>CHENG VUE</div><div className='brand-sub-heading'>FULL STACK WEB DEVELOPER</div>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">PROJECTS</Nav.Link>
              <Nav.Link href="#home">SKILLS</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
              <Nav.Link href="#link">RESUME</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

export default NavBar;