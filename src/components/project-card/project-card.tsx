import React from "react"

import "../../styles/project-card.scss"
import Item from "../menu/item"

interface Technologies {
  id: string
}

interface ProjectCardProps {
  img: string
  title: string
  resume: string
  tech: Technologies[]
  link?: string
}

const ProjectCard = ({ img, title, resume, tech, link }: ProjectCardProps) => {
  return (
    <div className="project-card-container">
      <div className="image">
        <img className="image-card" src={img} alt="" />
      </div>
      <div className="project-name">{title}</div>
      <div className="project-resume">{resume}</div>
      {link && (
        <a href={link} target="_blank">
          {link}
        </a>
      )}
      <div className="tech-container">
        {tech.map(tech_item => {
          return <Item color={"#18233a"} img={`./images/${tech_item.id}.png`} />
        })}
      </div>
    </div>
  )
}

export default ProjectCard
