import React from "react"

import "../../styles/project-card.scss"
import Item from "../menu/item"

interface Technologies {
  [index: number]: { id: string }
}

interface ProjectCardProps {
  title: string
  resume: string
  desc: string
  tech: Technologies
}

const ProjectCard = ({ title, resume, desc, tech }: ProjectCardProps) => {
  return (
    <div className="project-card-container">
      <div className="image">
        <img
          className="image-card"
          src="https://www.acronis.com/sites/default/files/inline_images/sharing_logo_ati_2021.jpg"
          alt=""
        />
      </div>
      <div className="project-name">{title}</div>
      <div className="project-resume">{resume}</div>
      <div className="tech-container">
        <Item color={"#18233a"} url={"https://rubengarcia.me/img/node.6dcf6999.png"} />
        <Item color={"#18233a"} url={"https://rubengarcia.me/img/node.6dcf6999.png"} />
      </div>
    </div>
  )
}

export default ProjectCard
