import React from "react"

import "../../styles/worked-in.scss"
import Item from "./item"

import techs from "../../../content/technologies.json"
import languages from "../../../content/languages.json"

const WorkedIn = () => {
  return (
    <div className="worked-in-container">
      <div className="column">
        <h2>Technologies & tools</h2>
        <div className="items-container">
          {techs.map((item: { url: string }) => {
            return <Item img={item.url} />
          })}
        </div>
      </div>
      <div className="column">
        <h2>Languages</h2>
        <div className="items-container">
          {languages.map((item: { url: string }) => {
            return <Item img={item.url} />
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkedIn
