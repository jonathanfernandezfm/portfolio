import React from "react"

import "../../styles/item.scss"

interface ItemProps {
  url: string
}

const Item = ({ url }: ItemProps) => {
  return (
    <div className="item-container">
      <img src={url} alt="technology-icon" />
    </div>
  )
}

export default Item
