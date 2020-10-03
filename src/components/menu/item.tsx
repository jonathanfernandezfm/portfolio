import React, { ReactNode } from "react"

import "../../styles/item.scss"

interface ItemProps {
  img: string
  color?: string
}

const Item = ({ img, color }: ItemProps) => {
  return (
    <div className="item-container" style={color ? { backgroundColor: color } : {}}>
      <img src={img} alt="technology-icon" />
    </div>
  )
}

export default Item
