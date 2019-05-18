import React from 'react';
import '../css/projects.css';
import Fade from 'react-reveal/Fade';

class Project1 extends React.Component {
  
  render() {
    return (
      <div className='project project-1'>
        <h3 className='sm-project-title text-center'>Ichiban</h3>
        <div className='row'>
          <Fade left delay={600} distance={'60px'}>
            <div className='project-img col-lg-5 offset-lg-1'>
              <a href='https://ichiban-fresno.herokuapp.com/' target="_blank" rel="noopener noreferrer"><img alt='ichiban' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/60302791_291250748450356_6943286380306890752_o.jpg?_nc_cat=111&_nc_ht=scontent-sjc3-1.xx&oh=f3c2518080d003a3c6ddc88040436bd6&oe=5D68DCD4'/></a>
            </div>
          </Fade>
          <Fade right delay={600} distance={'60px'}>
            <div className='project-content col-lg-5'>
              <div className='project-info'>
                <h3 className='ls-project-title text-center'>Ichiban</h3>
                <p>Restaurant web application where admins can create, read, update, and delete dishes.</p>
                <p>Technologies used: React, Redux, Javascript, Rails API, HTML5, CSS3, Bootstrap 4, Google Map API, and Google Cloud Storage. </p>
              </div>
              <div className='projects-links'>
                <a href='https://ichiban-fresno.herokuapp.com/' target="_blank" className="live-site btn btn-sm" rel="noopener noreferrer"><span>Live Site</span></a>
                <a href='https://github.com/Cheng0315/ichiban-fresno' target="_blank" className="github btn btn-sm" rel="noopener noreferrer"><span>Github</span></a>
                <a href='https://medium.com/@csalvue/personal-project-ichiban-fresno-e4c8e6461469' target="_blank" className="blog btn btn-sm" rel="noopener noreferrer"><span>Blog</span></a>
              </div>
            </div>
          </Fade>
        </div> 
      </div>
    )
  }
}

export default Project1