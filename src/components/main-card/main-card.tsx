import React from "react"

import "../../styles/main-card.scss"

import Image from "../../assets/images/profile_photo.jpg"
import ArrowDown from "../../assets/icons/arrow-down"
import description from "../../../content/description.json"

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
        <h1 dangerouslySetInnerHTML={{ __html: description.title }}></h1>
        <h2 style={{ width: 586 }} dangerouslySetInnerHTML={{ __html: description.description }}></h2>
        <h2 style={{ width: 460 }} dangerouslySetInnerHTML={{ __html: description.looking_for }}></h2>
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
