import React from 'react';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe'
import Project1 from './components/project1'
import Project2 from './components/project2'
import Project3 from './components/project3'
import HR from './components/hr'
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
        <h1 className='projects'>Technical Projects</h1>
        <Project1/>
        <HR/>
        <Project2/>
        <HR/>
        <Project3/>
      </div>
    );
  }
}

export default App
