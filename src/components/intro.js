import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../css/intro.css' 
import Fade from 'react-reveal/Fade';

class Intro extends React.Component {
  render() {
    return (
      <div id='intro' className='intro-container'>
        <div className='intro-content container'>
          <Fade left duration={1400} distance={'50px'}> 
            <h1>Full Stack Web Developer</h1>
          </Fade>
          <Fade bottom duration={1300} distance={'50px'}> 
            <p>Full Stack Web Developer with a passion for building innovative and 
              user friendly web application. With experience in Ruby on Rails, JavaScript, 
              and React and a background in music education, I discovered web development 
              through my interest in making music using software such as Pro Tools and Ableton Live. 
              An eager learner, I bring strong skills in team-building and project management 
              that help further advance company objectives.
            </p>
            <div className='intro-links'>
              <AnchorLink href='#contact' offset='70' className='btn btn-md'><span>Find out more</span></AnchorLink> <a href='/' className='btn btn-md'><span>Resume</span></a>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Intro;