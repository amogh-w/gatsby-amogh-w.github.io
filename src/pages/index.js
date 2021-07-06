import React from "react"

import Home from "../layouts/Home"
import ThemeToggle from "../components/ThemeToggle"

const Index = () => {
  return (
    <Home>
      <div>
        <div>Image</div>
        <div>Name</div>
      </div>
      <div>Links</div>
      <div>
        <ThemeToggle />
      </div>
    </Home>
  )
}

export default Index
