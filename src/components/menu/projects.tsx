import React from "react"

import "../../styles/projects.scss"
import ProjectCard from "../project-card/project-card"

import projects from "../../../content/projects.json"

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project: any) => {
        return (
          <ProjectCard
            img={`./images/${project.img}`}
            title={project.title}
            resume={project.desc}
            tech={project.techs}
            link={project.link}
          />
        )
      })}
    </div>
  )
}

export default Projects
