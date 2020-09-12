import React from "react"

import "../../styles/projects.scss"
import ProjectCard from "../project-card/project-card"

const Projects = () => {
  return (
    <div className="projects-container">
      <ProjectCard
        title={"Game Interface"}
        resume={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        desc={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        tech={[{ id: "node" }, { id: "react" }]}
      />
      <ProjectCard
        title={"Game Interface"}
        resume={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        desc={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        tech={[{ id: "node" }, { id: "react" }]}
      />
      <ProjectCard
        title={"Game Interface"}
        resume={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        desc={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        tech={[{ id: "node" }, { id: "react" }]}
      />
      <ProjectCard
        title={"Game Interface"}
        resume={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        desc={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        tech={[{ id: "node" }, { id: "react" }]}
      />
      <ProjectCard
        title={"Game Interface"}
        resume={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        desc={"Project for Despistaos, one of the largest and best communities of GTA V Roleplay in Spain."}
        tech={[{ id: "node" }, { id: "react" }]}
      />
    </div>
  )
}

export default Projects
