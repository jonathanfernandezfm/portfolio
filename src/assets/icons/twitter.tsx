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
      <title>{"twitter"}</title>
      <g data-name="Circle Black">
        <circle cx={42.5} cy={42.5} r={42.5} fill={active ? "#fff" : "#11192a"} />
        <path
          data-name="Twitter"
          d="M66.3 27.74a19.83 19.83 0 01-5.61 1.54A9.76 9.76 0 0065 23.87a19.46 19.46 0 01-6.2 2.37 9.77 9.77 0 00-16.89 6.68 10.23 10.23 0 00.25 2.23A27.78 27.78 0 0122 25a9.77 9.77 0 003 13 9.78 9.78 0 01-4.43-1.22v.13a9.77 9.77 0 007.84 9.57 9.95 9.95 0 01-4.41.17 9.76 9.76 0 009.12 6.78A19.6 19.6 0 0121 57.59a19.84 19.84 0 01-2.33-.14 27.55 27.55 0 0015 4.39c18 0 27.79-14.88 27.79-27.78v-1.27a19.82 19.82 0 004.84-5.05z"
          fill={active ? "#262626" : "#fff"}
        />
      </g>
    </svg>
  )
}

export default Github
