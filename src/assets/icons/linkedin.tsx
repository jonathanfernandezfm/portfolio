import React, { useState } from "react"
import IconProps from "./constants"

const Github = ({ size }: IconProps) => {
  const [active, setActive] = useState(false)
  return (
    <svg
      onMouseOver={() => {
        setActive(true)
      }}
      onMouseOut={() => {
        setActive(false)
      }}
      width={size}
      height={size}
      viewBox="0 0 85 85"
    >
      <title>{"linkedin"}</title>
      <g id="prefix__Circle_Black" data-name="Circle Black">
        <g id="prefix__Linkedin">
          <circle id="prefix__back" cx={42.5} cy={42.5} r={42.5} fill={active ? "#fff" : "#11192a"} />
          <g id="prefix__Linkedin-2" data-name="Linkedin">
            <path
              fill={active ? "#262626" : "#fff"}
              d="M19.31 34.36h9.87V66.1h-9.87zm4.94-15.77a5.72 5.72 0 11-5.72 5.72 5.72 5.72 0 015.72-5.72M35.37 34.36h9.45v4.34H45a10.36 10.36 0 019.33-5.12c10 0 11.83 6.57 11.83 15.11V66.1h-9.9V50.67c0-3.68-.06-8.42-5.12-8.42s-5.92 4-5.92 8.15v15.7h-9.85z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Github
