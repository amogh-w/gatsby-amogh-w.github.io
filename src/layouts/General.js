import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"

const General = ({ title, children }) => {
  return (
    <>
      <Helmet title={title} />
      <div className="min-h-screen flex flex-col items-center bg-nord6 dark:bg-nord0 text-nord0 dark:text-nord6 transition-all">
        <div className="container mx-auto">
          <Header title={title} />
        </div>
        <div className="flex-grow w-full">{children}</div>
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default General
