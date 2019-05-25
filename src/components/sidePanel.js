import React from 'react';
import '../css/sidePanel.css';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class SidePanel extends React.Component {
  
  render() {
    let panelClasses = 'side-panel';

    if (this.props.show) {
      panelClasses = 'side-panel open'
    }
    
    return (
      <nav className={panelClasses}>
        <div className='side-panel-links'>
          <div className='side-panel-logo'>
            <a href="/" className='navbar-icon'><FontAwesomeIcon icon="code-branch" size="3x"/></a>
            <a href="/" className='info'>
              <div className='name'>CHENG VUE</div>
              <div className='title'>FULL STACK WEB DEVELOPER</div>
            </a>
          </div>
          <Fade left distance={'25px'}> 
            <AnchorLink href='#intro' onClick={this.props.closeSidePanel}>HOME</AnchorLink>
          </Fade>
          <Fade left delay={100} distance={'25px'}> 
            <AnchorLink href='#projects-container' onClick={this.props.closeSidePanel} offset='70'>PROJECTS</AnchorLink>
          </Fade>
          <Fade left delay={200} distance={'25px'}> 
            <AnchorLink href='#technical-skills' onClick={this.props.closeSidePanel} offset='70'>SKILLS</AnchorLink>
          </Fade>
          <Fade left delay={300} distance={'25px'}> 
            <AnchorLink href='#contact'  onClick={this.props.closeSidePanel} offset='70'>CONTACT</AnchorLink>
          </Fade>
          <Fade left delay={400} distance={'25px'}> 
            <div><a href="https://learn.co/cheng-vue-0315/resume" target='_blank' rel="noopener noreferrer" onClick={this.props.closeSidePanel} >RESUME</a></div>
          </Fade>
        </div>
      </nav>
    )
  }
}

export default SidePanel