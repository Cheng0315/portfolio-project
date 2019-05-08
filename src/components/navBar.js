import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/navBar.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends React.Component {

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  
  render() {
    let navbarColor = 'fixed-top navbar-transparent';

    if (this.state.isTop === false) {
      navbarColor = 'fixed-top navbar-colored';
    }

    return (
      <Navbar bg="dark" expand="lg" className={navbarColor}>
        <div className='container'>
          <div className='navbar-brand'>
            <a href="/" className='navbar-icon'><FontAwesomeIcon icon="code-branch" size="3x"/></a>
            <a href="/" className='info'>
              <div className='name'>CHENG VUE</div>
              <div className='title'>FULL STACK WEB DEVELOPER</div>
            </a>
          </div>
          <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
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