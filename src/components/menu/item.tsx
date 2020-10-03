import React from "react"

import "../../styles/item.scss"

interface ItemProps {
  img: string
  color?: string
}

const Item = ({ img, color }: ItemProps) => {
  console.log(img)
  return (
    <div className="item-container" style={color ? { backgroundColor: color } : {}}>
      <img src={require(`../../assets/images/${img}.png`)} alt="technology-icon" />
    </div>
  )
}

export default Item
