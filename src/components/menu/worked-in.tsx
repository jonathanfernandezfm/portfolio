import React from "react"

const data = [
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  {
    url:
      "https://lh3.googleusercontent.com/proxy/xoD2LQ-x78_RoHZrtYcv1U1dE6vk5ffE9uAj_06Ug500GD9AU10pHTNjSklG21XOj7HSezO_4MG5M2DjdgemLLlPxypBTyecSuWXrTaTJ8_Hqqn65d-BPS2sm2iFdvpdzTpRGHC3GD656XL4FHIMc43J9h0KPTeloLNBC-UGXEotO6DPlWJRZoXcsPzQ_PVgqaVsviu2",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png",
  },
  { url: "https://i.pinimg.com/originals/b5/bd/f8/b5bdf80ff2b58b4d681f4d83115bd3ea.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
  { url: "https://rubengarcia.me/img/node.6dcf6999.png" },
]

import "../../styles/worked-in.scss"
import Item from "./item"

const WorkedIn = () => {
  return (
    <div className="worked-in-container">
      <div className="column">
        <h2>Technologies & tools</h2>
        <div className="items-container">
          {data.map(item => {
            return <Item url={item.url} />
          })}
        </div>
      </div>
      <div className="column">
        <h2>Languages</h2>
        <div className="items-container">
          {data.map(item => {
            return <Item url={item.url} />
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkedIn
