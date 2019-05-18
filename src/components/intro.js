import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../css/intro.css' 
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Intro extends React.Component {
  render() {
    return (
      <div id='intro' className='intro-container'>
        <div className='intro-content container'>
          <Fade left duration={1400} distance={'50px'}> 
            <h1>Cheng Vue</h1>
          </Fade>
          <Fade bottom duration={1300} distance={'50px'}> 
            <p>Full stack web developer with a passion for building functional, innovative and user-friendly web applications. 
              Excited about team-building, project management, and refining projects' details to further advance company objectives.
            </p>
            <div className='intro-links'>
              <AnchorLink href='#contact' offset='70' className='btn btn-md'><span>Find out more</span></AnchorLink> <a href='https://learn.co/cheng-vue-0315/resume' target='_blank' rel="noopener noreferrer" className='btn btn-md'><span>Resume</span></a>
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