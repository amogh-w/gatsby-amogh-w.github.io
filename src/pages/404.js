import React from "react"

import General from "../layouts/General"

const NotFound = () => {
  return (
    <General title="404">
      <div className="text-2xl md:text-3xl lg:text-4xl m-4">
        Page not found!
      </div>
    </General>
  )
}

export default NotFound
