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
      <title>{"dribble"}</title>
      <g data-name="Circle Black">
        <circle cx={42.5} cy={42.5} r={42.5} fill={active ? "#fff" : "#11192a"} />
        <path
          d="M53.73 58.9A72.39 72.39 0 0050 45.36a39.58 39.58 0 0112.12.51 20 20 0 01-8.39 13.03zm-23.29-.61c3.35-5.06 8-10.06 15.63-12.16a67.83 67.83 0 014 14.76 20.11 20.11 0 01-7.58 1.48 19.81 19.81 0 01-12.05-4.08zM22.63 42.5v-.64h.12c7.08 0 14.12-.47 20.42-2.32.46 1 .94 1.93 1.37 2.94-8.29 2.44-13.46 7.89-17 13.09a19.67 19.67 0 01-4.91-13.07zM34 24.55A98.58 98.58 0 0141.31 36a70.63 70.63 0 01-18.15 2A20 20 0 0134 24.55zm21.42 2.82a24.85 24.85 0 01-10.29 7.34 102.83 102.83 0 00-7.26-11.53 20.11 20.11 0 014.68-.55 19.73 19.73 0 0112.82 4.74zm2.74 2.85a19.81 19.81 0 014.26 11.72 42.1 42.1 0 00-13.92-.33c-.51-1.15-1-2.29-1.57-3.38a28.41 28.41 0 0011.18-8.01zM42.5 18.7a23.8 23.8 0 1023.8 23.8 23.79 23.79 0 00-23.8-23.8z"
          fill={active ? "#262626" : "#fff"}
        />
      </g>
    </svg>
  )
}

export default Github
