import React from "react"
import { SiGithub } from "react-icons/si"

const Footer = () => {
  return (
    <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl m-4">
      <div className="link">
        <a href="https://github.com/amogh-w">
          <SiGithub />
        </a>
      </div>
    </div>
  )
}

export default Footer
