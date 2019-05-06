import React from 'react';
import '../css/projects.css';

class Project2 extends React.Component {
  
  render() {
    return (
      <div className='project container'>
        <h3 className='sm-project-title text-center'>Swift-Kart</h3>
        <div className='sm-sc-project'>
          <div className='row'>
            <div className='project-img col-lg-5 offset-lg-1'>
              <img src='https://cdn.vox-cdn.com/thumbor/C37I0qrg7W3ECwMAjHh-IRB2fqs=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/61911425/acastro_180329_1777_amazon_0001.0.jpg'/>
            </div>
            <div className='project-content col-lg-5'>
              <div className='project-info'>
                <h3 className='ls-project-title text-center'>Swift-Kart</h3>
                <div>E-commerce application where users can buy and sell items</div>
                <div>Technologies used: Ruby on Rails, Javascript, HTML5, CSS3, jQuery, Bootstrap 4, Handlebars, MVC, OAuth and Rails API</div>
              </div>
              <div className='projects-links'>
                <button type="button" className="live-site btn btn-sm btn-danger ">Live Site</button>
                <button type="button" className="github btn btn-sm btn-danger">Github</button>
              </div>
            </div>
          </div>
        </div>
        <div className='lg-sc-project'>
          <div className='row'>
            <div className='project-content col-lg-5 offset-lg-1'>
              <div className='project-info'>
                <h3 className='text-center'>Swift-Kart</h3>
                <div>E-commerce application where users can buy and sell items</div>
                <div>Technologies used: Ruby on Rails, Javascript, HTML5, CSS3, jQuery, Bootstrap 4, Handlebars, MVC, OAuth and Rails API</div>
              </div>
              <div className='projects-links'>
                <button type="button" className="live-site btn btn-sm btn-danger ">Live Site</button>
                <button type="button" className="github btn btn-sm btn-danger">Github</button>
              </div>
            </div>
            <div className='project-img col-lg-5'>
              <img src='https://cdn.vox-cdn.com/thumbor/C37I0qrg7W3ECwMAjHh-IRB2fqs=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/61911425/acastro_180329_1777_amazon_0001.0.jpg'/>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Project2