import React from 'react';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <NavBar/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
