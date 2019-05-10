import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../css/navBar.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';

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
              <Fade top distance={'25px'}> 
                <AnchorLink href='#intro' className='nav-link'>HOME</AnchorLink>
              </Fade>
              <Fade top delay={100} distance={'25px'}> 
                <AnchorLink href='#projects-container' offset='70' className='nav-link'>PROJECTS</AnchorLink>
              </Fade>
              <Fade top delay={200} distance={'25px'}> 
                <AnchorLink href='#technical-skills' offset='70' className='nav-link'>SKILLS</AnchorLink>
              </Fade>
              <Fade top delay={300} distance={'25px'}> 
                <AnchorLink href='#contact' offset='70' className='nav-link'>CONTACT</AnchorLink>
              </Fade>
              <Fade top delay={400} distance={'25px'}> 
                <Nav.Link href="#link">RESUME</Nav.Link>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

export default NavBar;