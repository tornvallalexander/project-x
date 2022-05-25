import React from "react"
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

function Main({children, width = "max-w-7xl", className}: Props) {
  return (
    <div className={clsx(
      "mx-auto px-6 xl:px-0",
      width,
      className
    )}>
      {children}
    </div>
  )
}

export {Main}