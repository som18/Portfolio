import React from 'react'
import ProjectItem from '../Components/ProjectItem';
import '../styles/Project.css';
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList"></div>
      {ProjectList.map((project , idx) => {
          return (
            <ProjectItem id = {idx} name={project.name} image={project.image} />
          );
        })}

      
    </div> 
  )
}

export default Projects
