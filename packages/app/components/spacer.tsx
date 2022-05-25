import React from "react"

const sizes = {
  "3xs": "h-6 lg:h-8",
  "2xs": "h-10 lg:h-12",
  xs: "h-20 lg:h-24",
  sm: "h-32 lg:h-36",
  md: "h-40 lg:h-48",
  lg: "h-56 lg:h-64",
}

interface Props {
  size?: keyof typeof sizes;
  className?: string;
}

function Spacer({size = "sm", className = ""}: Props) {
  return (
    <div className={`${className} ${sizes[size]}`} />
  )
}

export {Spacer}