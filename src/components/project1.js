import React from 'react';
import '../css/projects.css';

class Project1 extends React.Component {
  
  render() {
    return (
      <div className='project container'>
        <h3 className='sm-project-title text-center'>Ichiban</h3>
        <div className='row'>
          <div className='project-img col-lg-5 offset-lg-1'>
            <img src='https://cdn.vox-cdn.com/thumbor/C37I0qrg7W3ECwMAjHh-IRB2fqs=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/61911425/acastro_180329_1777_amazon_0001.0.jpg'/>
          </div>
          <div className='project-content col-lg-5'>
            <div className='project-info'>
              <h3 className='ls-project-title text-center'>Ichiban</h3>
              <div>Restaurant web application where admins can create, read, update, and delete dishes</div>
              <div>Technologies used: React, Redux, Javascript, Ruby on Rails, Rails API,  HTML5, CSS3, Bootstrap 4, and Google Map API </div>
            </div>
            <div className='projects-links'>
              <button type="button" className="live-site btn btn-sm btn-danger ">Live Site</button>
              <button type="button" className="github btn btn-sm btn-danger">Github</button>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Project1