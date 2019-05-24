import React from 'react';
import '../css/aboutMe.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';

class AboutMe extends React.Component {
  render() {
    return (
      <section id='contact' className='contact container'>
        <div className='about-me-container'>
          <div className='about-me'>
          <Fade left cascade delay={400} duration={700} distance={'10px'}> 
            <div className='img-and-social'>
              <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11407135_869083649829783_6563221059322769096_n.jpg?_nc_cat=107&_nc_ht=scontent-sjc3-1.xx&oh=a6c3d927876283e61646aaac5bde9482&oe=5D5F2F1C' alt='Cheng Vue'/>
              <div className='social'>
                <a href='https://www.linkedin.com/in/cheng-vue-162b10180/' target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
                </a>
                <a href='https://github.com/Cheng0315' target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </a>
                <a href='http://chengvue.net' target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'blogger']} size="2x"/>
                </a>
              </div>
              <a href='https://learn.co/cheng-vue-0315/resume' target='_blank' rel="noopener noreferrer" className='btn btn-sm'><span>Resume</span></a>
            </div>
            </Fade>
            <Fade right cascade delay={400} duration={700} distance={'10px'}>
            <div className='about-me-info'>
              <h1>About Me</h1>
              <p>I'm a full stack web developer based in the San Francisco Bay Area.
                I enjoy turning complex problems into simple, beautiful and easy to read code. 
                When not coding, you'll find me cooking, playing the guitar or jogging in the park.</p>
              <p>Interested in working together? We should queue up a chat. I'll buy the coffee.</p>
              <div className='contact'>
                <h1>Contact</h1>
                  <p className='phone'><FontAwesomeIcon icon='phone' className='fa-rotate-90'/>  Phone: (559) 286-6435</p>
                  <p className='email'><FontAwesomeIcon icon='envelope'/>  Email: csalvue@gmail.com</p>
                  <p className='location'><FontAwesomeIcon icon='map-marker-alt'/> Location: San Francisco Bay Area</p>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe;