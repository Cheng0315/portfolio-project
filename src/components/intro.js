import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../css/intro.css' 
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import Bounce from 'react-reveal/Swing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Intro extends React.Component {
  render() {
    return (
      <div id='intro' className='intro-container'>
        <div className='intro-content container'>
          <Fade left duration={1400} distance={'50px'}> 
            <h1>Full Stack Web Developer</h1>
          </Fade>
          <Fade bottom duration={1300} distance={'50px'}> 
            <p>Full Stack Web Developer with a passion for building functional, innovative and 
              user friendly web application. With experience in Ruby on Rails, JavaScript, 
              and React and a background in music education, I discovered we
            </p>
            <div className='intro-links'>
              <AnchorLink href='#contact' offset='70' className='btn btn-md'><span>Find out more</span></AnchorLink> <a href='/' className='btn btn-md'><span>Resume</span></a>
              
            </div>
          </Fade>
          
        </div>
        <div className='down-arrow-link'>
        <Fade top distance='30px'>
          <Swing delay={1000}>
            <AnchorLink href='#projects-container'  offset='70'><FontAwesomeIcon icon='angle-down' size='7x'/></AnchorLink>
          </Swing>
        </Fade>
        </div>
      </div>
    )
  }
}

export default Intro;