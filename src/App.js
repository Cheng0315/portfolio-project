import React from 'react';
import NavBar from './components/navBar';
import Intro from './components/intro'
import Project1 from './components/project1'
import Project2 from './components/project2'
import Project3 from './components/project3'
import Skills from './components/skills'
import AboutMe from './components/aboutMe'
import Footer from './components/footer'
import HR from './components/hr'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faCodeBranch, faMapMarkerAlt, faEnvelope, faPhone, fab)

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <NavBar/>
        <Intro/>
        <h1 className='projects'>Technical Projects</h1>
        <div className='title-hr'></div>
        <Project1/>
        <HR/>
        <Project2/>
        <HR/>
        <Project3/>
        <Skills/>
        <AboutMe/>
        <Footer/>
      </div>
    );
  }
}

export default App
