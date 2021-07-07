import React from "react"
import { navigate } from "gatsby"
import { MdArrowBack } from "react-icons/md"

import ThemeToggle from "./ThemeToggle"

const Header = ({ title }) => {
  return (
    <div className="flex justify-between text-2xl md:text-3xl lg:text-4xl m-4">
      <div className="link">
        <button onClick={() => navigate(-1)}>
          <MdArrowBack />
        </button>
      </div>
      <div className="text-nord9 italic font-semibold text-center pl-2 pr-2">
        {title}
      </div>
      <div className="link">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
