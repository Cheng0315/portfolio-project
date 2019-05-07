import React from 'react';
import '../css/skills.css' 

class Skills extends React.Component {
  render() {
    return (
      <div className='technical-skills'>
        <div className='container'>
          <h1 className='skills-header'>Technical Skills</h1>
          <div className='dev-logos'>
            <div className='dev-logos-top'>
              <a href='https://www.ruby-lang.org/en/' target='_blank'>
                <div className='dev-logo-ruby'>
                  <img src='https://cdn.svgporn.com/logos/ruby.svg'/>
                  <h6>RUBY</h6>
                </div>
              </a>
              <a href='https://rubyonrails.org/' target='_blank'>
                <div className='dev-logo-rails'>
                  <img src='https://cdn.svgporn.com/logos/rails.svg'/>
                  <h6>RAILS</h6>
                </div>
              </a>
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
                <div className='dev-logo-js'>
                  <img src='https://cdn.svgporn.com/logos/javascript.svg'/>
                  <h6>JAVASCRIPT</h6>
                </div>
              </a>
              <a href='https://reactjs.org/' target='_blank'>
                <div className='dev-logo-react'>
                  <img src='https://cdn.svgporn.com/logos/react.svg'/>
                  <h6>REACT</h6>
                </div>
              </a>
              <a href='https://redux.js.org/' target='_blank'>
                <div className='dev-logo-redux'>
                  <img src='https://cdn.svgporn.com/logos/redux.svg'/>
                  <h6>REDUX</h6>
                </div>
              </a>
              <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='_blank'>
                <div className='dev-logo-html5'>
                  <img src='https://cdn.svgporn.com/logos/html-5.svg'/>
                  <h6>HTML5</h6>
                </div>
              </a>
              <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target='_blank'>
                <div className='dev-logo-css3'>
                  <img src='https://cdn.svgporn.com/logos/css-3.svg'/>
                  <h6>CSS3</h6>
                </div>
              </a>
            </div>
            <div className='dev-logos-bottom'> 
              <a href='https://jquery.com/' target='_blank'>
                <div className='dev-logo-jquery'>
                  <img src='https://cdn.svgporn.com/logos/jquery.svg'/>
                  <h6>JQUERY</h6>
                </div>
              </a>
              <a href='https://getbootstrap.com/' target='_blank'>
                <div className='dev-logo-bootstrap'>
                  <img src='https://cdn.svgporn.com/logos/bootstrap.svg'/>
                  <h6>BOOTSTRAP</h6>
                </div>
              </a>
              <a href='https://handlebarsjs.com/' target='_blank'>
                <div className='dev-logo-handlebars'>
                  <img src='https://cdn.svgporn.com/logos/handlebars.svg'/>
                  <h6>HANDLEBARS</h6>
                </div>
              </a>
              <a href='https://www.mysql.com/' target='_blank'>
                <div className='dev-logo-mysql'>
                  <img src='https://cdn.svgporn.com/logos/mysql.svg'/>
                  <h6>MYSQL</h6>
                </div>
              </a>
              <a href='https://www.postgresql.org/' target='_blank'>
                <div className='dev-logo-pg'>
                  <img src='https://cdn.svgporn.com/logos/postgresql.svg'/>
                  <h6>POSTGRESQL</h6>
                </div>
              </a>
              <a href='https://git-scm.com/' target='_blank'>
                <div className='dev-logo-git'>
                  <img src='https://cdn.svgporn.com/logos/git-icon.svg'/>
                  <h6>GIT</h6>
                </div>
              </a>
              <a href='https://github.com/' target='_blank'>
                <div className='dev-logo-github'>
                  <img src='https://cdn.svgporn.com/logos/github-icon.svg'/>
                  <h6>GITHUB</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;