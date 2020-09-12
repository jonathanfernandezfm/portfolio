import React from "react"

import "../../styles/item.scss"

interface ItemProps {
  url: string
  color?: string
}

const Item = ({ url, color }: ItemProps) => {
  return (
    <div className="item-container" style={color ? { backgroundColor: color } : {}}>
      <img src={url} alt="technology-icon" />
    </div>
  )
}

export default Item
