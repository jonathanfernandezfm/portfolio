import React, { useState } from "react"

import "../../styles/secondary-card.scss"
import Github from "../../assets/icons/github"
import Instagram from "../../assets/icons/instagram"
import Linkedin from "../../assets/icons/linkedin"
import Twitter from "../../assets/icons/twitter"
import Dribble from "../../assets/icons/dribble"
import WorkedIn from "../menu/worked-in"
import InterestedIn from "../menu/interested-in"

interface SecondaryCardProps {}

const SecondaryCard = ({}: SecondaryCardProps) => {
  const [active, setActive] = useState(0)

  return (
    <div className="sec-card-container">
      <div className="sec-card-header">
        <div className="links-container">
          <div className="link-container">
            <Github size={73} />
          </div>
          <div className="link-container">
            <Instagram size={73} />
          </div>
          <div className="link-container">
            <Linkedin size={73} />
          </div>
          <div className="link-container">
            <Twitter size={73} />
          </div>
          <div className="link-container">
            <Dribble size={73} />
          </div>
        </div>
        {active === 0 && <h1>Get to know me a little better</h1>}
        {active === 1 && <h1>I love new things</h1>}
        {active === 2 && <h1>I have created some things</h1>}
        {active === 3 && <h1>Talk to me! I don't bite</h1>}
      </div>
      <div className="sec-card-body">
        <div className="menu-container">
          <div className={"menu-button" + (active === 0 ? " active" : "")} onClick={() => setActive(0)}>
            Worked in/with
          </div>
          <div className={"menu-button" + (active === 1 ? " active" : "")} onClick={() => setActive(1)}>
            Interested in
          </div>
          <div className={"menu-button" + (active === 2 ? " active" : "")} onClick={() => setActive(2)}>
            Projects
          </div>
          <div className={"menu-button" + (active === 3 ? " active" : "")} onClick={() => setActive(3)}>
            Contact
          </div>
        </div>
        {active === 0 && (
          <div className="menu-content">
            <WorkedIn />
          </div>
        )}
        {active === 1 && (
          <div className="menu-content">
            <InterestedIn />
          </div>
        )}
      </div>
    </div>
  )
}

export default SecondaryCard
