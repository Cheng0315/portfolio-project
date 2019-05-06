import React from 'react';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
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
        <Projects/>
      </div>
    );
  }
}

export default App
