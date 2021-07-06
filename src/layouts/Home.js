import React from "react"
import { Helmet } from "react-helmet"

const Home = ({ children }) => {
  return (
    <>
      <Helmet title="Home" />
      <div className="min-h-screen flex bg-nord6 dark:bg-nord0 text-nord0 dark:text-nord6 transition-all">
        <div className="container mx-auto flex flex-col justify-evenly items-center bg-white dark:bg-nord1 rounded shadow p-2 m-2 transition-all">
          {children}
        </div>
      </div>
    </>
  )
}

export default Home
