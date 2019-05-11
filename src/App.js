import React from 'react';
import NavBar from './components/navBar';
import Intro from './components/intro'
import ProjectsContainer from './containers/projectsContainer'
import Skills from './components/skills'
import AboutMe from './components/aboutMe'
import Footer from './components/footer'
import SidePanel from './components/sidePanel'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch, faMapMarkerAlt, faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faCodeBranch, faMapMarkerAlt, faEnvelope, faPhone, fab, faBars)

class App extends React.Component {
  state = {
    sidePanelOpen: false
  }

  sidePanelClickHandler = () => {
    this.setState((prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen}
    })
  }

  closeSidePanel = () => {
    this.setState({
      sidePanelOpen: false
    })
  }

  render() {
    let backdrop;

    if (this.state.sidePanelOpen) {
      backdrop = <div className='backdrop' onClick={this.closeSidePanel}/>
    }

    return (
      <div id="app">
        <NavBar sidePanelClickHandler={this.sidePanelClickHandler}/>
        <SidePanel show={this.state.sidePanelOpen} closeSidePanel={this.closeSidePanel}/>
        {backdrop}
        <Intro/>
        <ProjectsContainer/>
        <Skills/>
        <AboutMe/>
        <Footer/>
      </div>
    );
  }
}

export default App
