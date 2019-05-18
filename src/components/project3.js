import React from 'react';
import '../css/projects.css';
import Fade from 'react-reveal/Fade';

class Project3 extends React.Component {
  
  render() {
    return (
      <div className='project project-3'>
        <h3 className='sm-project-title text-center'>Sinix</h3>
        <div className='row'>
          <Fade left delay={400} distance={'60px'}>
            <div className='project-img col-lg-5 offset-lg-1'>
              <a href='https://sinix-app.herokuapp.com/' target="_blank" rel="noopener noreferrer"><img alt='sinix' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/59754012_287305848844846_2969365308407545856_o.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=2a32ff11843a7b492692f7492417de88&oe=5D77AAEB'/></a>
            </div>
          </Fade>
          <Fade right delay={400} distance={'60px'}>
            <div className='project-content col-lg-5'>
              <div className='project-info'>
                <h3 className='ls-project-title text-center'>Sinix</h3>
                <p className='project-description'>Web application that generates the structures of a Sinatra web application.</p>
                <p>Technologies Used: Ruby, Sinatra, HTML5, CSS3, and Bootstrap 4.</p>
              </div>
              <div className='projects-links'>
                <a href='https://sinix-app.herokuapp.com/' target="_blank" className="live-site btn btn-sm" rel="noopener noreferrer"><span>Live Site</span></a>
                <a href='https://github.com/Cheng0315/sinix' target="_blank" className="github btn btn-sm" rel="noopener noreferrer"><span>Github</span></a>
                <a href='https://medium.com/@csalvue/personal-project-sinix-eaaf87dd9947' target="_blank" rel="noopener noreferrer" className="blog btn btn-sm"><span>Blog</span></a>
              </div>
            </div>
          </Fade>
        </div> 
      </div>
    )
  }
}

export default Project3