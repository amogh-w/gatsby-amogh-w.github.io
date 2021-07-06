import React from "react"

const Home = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-nord6 dark:bg-nord0 text-nord0 dark:text-nord6">
      <div className="container mx-auto flex flex-col justify-evenly items-center bg-white dark:bg-nord1 rounded shadow p-2 m-2">
        {children}
      </div>
    </div>
  )
}

export default Home
