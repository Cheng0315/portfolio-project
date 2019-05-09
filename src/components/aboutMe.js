import React from 'react';
import '../css/aboutMe.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AboutMe extends React.Component {
  render() {
    return (
      <div className='container'>
      <div className='about-me-container'>
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
            <p>I discovered web development through my interest in making music using software such as Pro Tools and Ableton Live. 
              With experience in Ruby on Rails, JavaScript, 
              and React, I enjoy building functional, innovative and user friendly web application for clients.</p>
            <p>Nowadays I code all my projects from scratch to deliver unique experiences to every company.</p>
            <p>Like many other people, I enjoy spending my free time learning new technologies and 
              increasing my knowledge of Web Development as well as building new and challenging projects.
            </p>
            <div className='contact'>
              <h1>Contact</h1>
                <p className='phone'><FontAwesomeIcon icon='phone' className='fa-rotate-90'/>  Phone: (559) 286-6435</p>
                <p className='email'><FontAwesomeIcon icon='envelope'/>  Email: csalvue@gmail.com</p>
                <p className='location'><FontAwesomeIcon icon='map-marker-alt'/> Location: San Francisco Bay Area</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default AboutMe;