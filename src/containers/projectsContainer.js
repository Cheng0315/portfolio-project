import React from 'react';
import Project1 from '../components/project1'
import Project2 from '../components/project2'
import Project3 from '../components/project3'
import HR from '../components/hr'

class ProjectContainer extends React.Component {
  
  render() {
    return (
      <div id='projects-container' className='projects-container'>
        <h1 id='project'className='projects'>Technical Projects</h1>
        <div className='title-hr'></div>
        <Project1/>
        <HR/>
        <Project2/>
        <HR/>
        <Project3/>
      </div>
    )
  }
}

export default ProjectContainer