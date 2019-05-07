import React from 'react';
import '../css/projects.css';

class Project3 extends React.Component {
  
  render() {
    return (
      <div className='project container project-3'>
        <h3 className='sm-project-title text-center'>Sinix</h3>
        <div className='row'>
          <div className='project-img col-lg-5 offset-lg-1'>
          <a href='https://sinix-app.herokuapp.com/' target="_blank"><img src='https://cdn.vox-cdn.com/thumbor/C37I0qrg7W3ECwMAjHh-IRB2fqs=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/61911425/acastro_180329_1777_amazon_0001.0.jpg'/></a>
          </div>
          <div className='project-content col-lg-5'>
            <div className='project-info'>
              <h3 className='ls-project-title text-center'>Sinix</h3>
              <div>Web application that generates the structures of a Sinatra web application.</div>
              <div>Technologies Used: Ruby, Sinatra, HTML5, CSS3, Bootstrap 4.</div>
            </div>
            <div className='projects-links'>
              <a href='https://sinix-app.herokuapp.com/' target="_blank" className="live-site btn btn-sm">Live Site</a>
              <a href='https://github.com/Cheng0315/sinix' target="_blank" className="github btn btn-sm">Github</a>
              <a href='/' target="_blank" className="blog btn btn-sm">Blog</a>
            </div>
          </div>
        </div> 
    </div>
    )
  }
}

export default Project3