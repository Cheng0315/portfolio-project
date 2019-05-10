import React from 'react';
import NavBar from './components/navBar';
import Intro from './components/intro'
import ProjectsContainer from './containers/projectsContainer'
import Skills from './components/skills'
import AboutMe from './components/aboutMe'
import Footer from './components/footer'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faCodeBranch, faMapMarkerAlt, faEnvelope, faPhone, fab)

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div id='space'></div>
        <NavBar/>
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
