import React from "react"

import "../../styles/main-card.scss"

import Image from "../../assets/images/profile_photo.jpg"
import ArrowDown from "../../assets/icons/arrow-down"

interface MainCardProps {}

const scrollToSecondCard = () => {
  window.scrollTo({ top: 1080, behavior: "smooth" })
}

const MainCard = ({}: MainCardProps) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="image-container">
          <img className={"profile-image"} src={Image} />
        </div>
      </div>
      <div className="card-body">
        <h1>
          👋 Hi, my name is <b>Jonathan</b>
        </h1>
        <h2 style={{ width: 586 }}>
          I'm an <b>Information Systems Engineer</b> and <b>Full Stack Developer</b> from Granada, Spain
        </h2>
        <h2 style={{ width: 460 }}>
          🔍 Looking to <b>improve</b> my skills and learn new <b>technologies / areas</b>
        </h2>
      </div>
      <div className="card-footer">
        <h2>more</h2>
        <div
          onClick={() => {
            scrollToSecondCard()
          }}
          className="button"
        >
          <ArrowDown color={"white"} size={28} />
        </div>
      </div>
    </div>
  )
}

export default MainCard
