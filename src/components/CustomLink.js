import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const CustomLink = ({ to, children }) => {
  return (
    <AniLink className="link" paintDrip hex="#81A1C1" to={to}>
      {children}
    </AniLink>
  )
}

export default CustomLink
