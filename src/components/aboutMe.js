import React from 'react';
import '../css/aboutMe.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AboutMe extends React.Component {
  render() {
    return (
      <div className='about-me-container container'>
        <div className='about-me'>
          <div className='img-and-social'>
            <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11407135_869083649829783_6563221059322769096_n.jpg?_nc_cat=107&_nc_ht=scontent-sjc3-1.xx&oh=a6c3d927876283e61646aaac5bde9482&oe=5D5F2F1C'/>
            <div className='social'>
              <a href='https://www.linkedin.com/in/cheng-vue-162b10180/'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
              </a>
              <a href='https://github.com/Cheng0315'>
                <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
              </a>
              <a href='/'>
                <FontAwesomeIcon icon={['fab', 'blogger']} size="2x"/>
              </a>
            </div>
          </div>
          <div className='about-me-info'>
            <h1>About Me</h1>
            <p>Hello there! My name is Cheng Vue and I am a Full Stack Web Developer.</p>
            <p>I enjoy building functional, innovative and user friendly web application. 
                I discovered web development 
                through my interest in music making using software such as Pro Tools and Ableton Live. 
                With experience in Ruby on Rails, JavaScript, 
                and React and a background in music education, 
                An eager learner, I bring strong skills in team-building and project management 
                that help further advance company objectives.
            </p>
            <div className='contact'>
            <h1>Contact</h1>
            <div className='location'>Location: San Francisco Bay Area</div>
            <div className='email'>Email: csalvue@gmail.com</div>
            <div className='phone'>Phone: (559) 286-6435</div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;