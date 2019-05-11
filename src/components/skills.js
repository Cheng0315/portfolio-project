import React from 'react';
import '../css/skills.css' 
import Fade from 'react-reveal/Fade';

class Skills extends React.Component {
  render() {
    return (
      <section id='technical-skills' className='technical-skills'>
        <div className='container'>
          <Fade duration={1000} delay={700}>
            <h1 className='skills-header'>Technical Skills</h1>
          </Fade>
          <div className='title-hr'></div>
          <div className='dev-logos-container'>
            <Fade duration={1000} delay={700}>  
              <div className='dev-logos'>
                <a href='https://www.ruby-lang.org/en/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/ruby.svg' alt='ruby'/>
                  <h6>RUBY</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={800}>  
            <div className='dev-logos'>
              <a href='https://rubyonrails.org/' target='_blank' rel="noopener noreferrer">
                <img src='https://cdn.svgporn.com/logos/rails.svg' alt='rails'/>
                <h6>RAILS</h6>
              </a>
            </div>
            </Fade>
            <Fade duration={1000} delay={900}>  
              <div className='dev-logos'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/javascript.svg' alt='js'/>
                  <h6>JAVASCRIPT</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1000}> 
              <div className='dev-logos'>
                <a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/react.svg' alt='react'/>
                  <h6>REACT</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1100}> 
              <div className='dev-logos'>
                <a href='https://redux.js.org/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/redux.svg' alt='redux'/>
                  <h6>REDUX</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1200}> 
              <div className='dev-logos'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/html-5.svg' alt='html5'/>
                  <h6>HTML5</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1300}> 
              <div className='dev-logos'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/css-3.svg' alt='css3'/>
                  <h6>CSS3</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1000}> 
              <div className='dev-logos'>
                <a href='https://jquery.com/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/jquery.svg' alt='jquery'/>
                  <h6>JQUERY</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1100}> 
              <div className='dev-logos'>
                <a href='https://getbootstrap.com/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/bootstrap.svg' alt='bootstrap'/>
                  <h6>BOOTSTRAP</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1200}> 
              <div className='dev-logos'>
                <a href='https://handlebarsjs.com/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/handlebars.svg' alt='handlebars'/>
                  <h6>HANDLEBARS</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1300}> 
              <div className='dev-logos'>
                <a href='https://www.mysql.com/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/mysql.svg' alt='mysql'/>
                  <h6>MYSQL</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1400}> 
              <div className='dev-logos'>
                <a href='https://www.postgresql.org/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/postgresql.svg' alt='pg'/>
                  <h6>POSTGRESQL</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1500}> 
              <div className='dev-logos'>
                <a href='https://git-scm.com/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/git-icon.svg' alt='git'/>
                  <h6>GIT</h6>
                </a>
              </div>
            </Fade>
            <Fade duration={1000} delay={1600}> 
              <div className='dev-logos'>
                <a href='https://github.com/' target='_blank' rel="noopener noreferrer">
                  <img src='https://cdn.svgporn.com/logos/github-icon.svg' alt='github'/>
                  <h6>GITHUB</h6>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;