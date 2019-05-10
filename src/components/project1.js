import React from 'react';
import '../css/projects.css';

class Project1 extends React.Component {
  
  render() {
    return (
      <div className='project container project-1'>
        <h3 className='sm-project-title text-center'>Ichiban</h3>
        <div className='row'>
          <div className='project-img col-lg-5 offset-lg-1'>
            <a href='/'><img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11407135_869083649829783_6563221059322769096_n.jpg?_nc_cat=107&_nc_ht=scontent-sjc3-1.xx&oh=a6c3d927876283e61646aaac5bde9482&oe=5D5F2F1C'/></a>
          </div>
          <div className='project-content col-lg-5'>
            <div className='project-info'>
              <h3 className='ls-project-title text-center'>Ichiban</h3>
              <p>Restaurant web application where admins can create, read, update, and delete dishes.</p>
              <p>Technologies used: React, Redux, Javascript, Rails API, HTML5, CSS3, Bootstrap 4, Google Map API, and Google Cloud. </p>
            </div>
            <div className='projects-links'>
              <a href='/' target="_blank" className="live-site btn btn-sm"><span>Live Site</span></a>
              <a href='https://github.com/Cheng0315/ichiban-fresno' target="_blank" className="github btn btn-sm"><span>Github</span></a>
              <a href='/' target="_blank" className="blog btn btn-sm"><span>Blog</span></a>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Project1