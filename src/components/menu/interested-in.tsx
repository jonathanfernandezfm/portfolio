import React from "react"

import "../../styles/interested-in.scss"
import interests from "../../../content/interests.json"

const InterestedIn = () => {
  return (
    <div className="interested-in-container">
      <ul>
        {interests.map((interest: string) => {
          return <li>{interest}</li>
        })}
      </ul>
    </div>
  )
}

export default InterestedIn
