import React from 'react';
import '../css/projects.css';
import Fade from 'react-reveal/Fade';

class Project2 extends React.Component {
  
  render() {
    return (
      <div className='project container'>
        <h3 className='sm-project-title text-center'>Swift-Kart</h3>
        <div className='sm-sc-project'>
          <div className='row'>
            <Fade top delay={400} distance={'70px'}>
              <div className='project-img col-lg-5 offset-lg-1'>
                <a href='https://swift-kart-app.herokuapp.com' target="_blank"><img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/59644330_287304338844997_9086939823716958208_o.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=889836d15fffb7099798940c845ffb07&oe=5D64ECC0'/></a>
              </div>
            </Fade>
            <Fade bottom delay={400} distance={'70px'}>
              <div className='project-content col-lg-5'>
                <div className='project-info'>
                  <h3 className='ls-project-title text-center'>Swift-Kart</h3>
                  <p className='project-description'>E-commerce application where users can buy and sell items.</p>
                  <p>Technologies used: Ruby on Rails, Javascript, HTML5, CSS3, jQuery, Bootstrap 4, Handlebars, MVC, OAuth, and Google Cloud.</p>
                </div>
                <div className='projects-links'>
                  <a href='https://swift-kart-app.herokuapp.com' target="_blank" className="live-site btn btn-sm"><span>Live Site</span></a>
                  <a href='https://github.com/Cheng0315/swift-kart' target="_blank" className="github btn btn-sm"><span>Github</span></a>
                  <a href='/' target="_blank" className="blog btn btn-sm"><span>Blog</span></a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className='lg-sc-project'>
          <div className='row'>
            <Fade top delay={400} distance={'70px'}>
              <div className='project-content col-lg-5 offset-lg-1'>
                <div className='project-info'>
                  <h3 className='text-center'>Swift-Kart</h3>
                  <p className='project-description'>E-commerce application where users can buy and sell items.</p>
                  <p>Technologies used: Ruby on Rails, Javascript, HTML5, CSS3, jQuery, Bootstrap 4, Handlebars, MVC, OAuth, and Google Cloud.</p>
                </div>
                <div className='projects-links'>
                  <a href='https://swift-kart-app.herokuapp.com' target="_blank" className="live-site btn btn-sm"><span>Live Site</span></a>
                  <a href='https://github.com/Cheng0315/swift-kart' target="_blank" className="github btn btn-sm"><span>Github</span></a>
                  <a href='/' target="_blank" className="blog btn btn-sm"><span>Blog</span></a>
                </div>
              </div>
            </Fade>
            <Fade bottom delay={400} distance={'70px'}>
              <div className='project-img col-lg-5'>
                <a href='https://swift-kart-app.herokuapp.com' target="_blank"><img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/59644330_287304338844997_9086939823716958208_o.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=889836d15fffb7099798940c845ffb07&oe=5D64ECC0'/></a>
              </div>
            </Fade>
          </div>
        </div> 
      </div>
    )
  }
}

export default Project2