import React from 'react';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe'
import Project1 from './components/project1'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

library.add(faCodeBranch)

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <NavBar/>
        <AboutMe/>
        <h1 className='tech-projects'>Technical Projects</h1>
        <Project1/>
      </div>
    );
  }
}

export default App
