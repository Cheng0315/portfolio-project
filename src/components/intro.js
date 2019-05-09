import React from 'react';
import '../css/intro.css' 

class Intro extends React.Component {
  render() {
    return (
      <div className='intro-container'>
        <img src='https://ak5.picdn.net/shutterstock/videos/26581145/thumb/1.jpg'/>
        <div className='intro-content container'>
          <h1>Full Stack Web Developer</h1>
          <p>Full Stack Web Developer with a passion for building innovative and 
            user friendly web application. With experience in Ruby on Rails, JavaScript, 
            and React and a background in music education, I discovered web development 
            through my interest in making music using software such as Pro Tools and Ableton Live. 
            An eager learner, I bring strong skills in team-building and project management 
            that help further advance company objectives.</p>
        </div>
      </div>
    )
  }
}

export default Intro;