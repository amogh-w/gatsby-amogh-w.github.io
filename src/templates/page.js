import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import General from "../layouts/General"

const Page = ({ data: { mdx } }) => {
  return (
    <General title={mdx.frontmatter.title}>
      <div className="container mx-auto flex justify-center bg-white dark:bg-nord1 rounded shadow p-6 transition-all">
        <article className="prose dark:prose-dark prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </div>
    </General>
  )
}

export const pageQuery = graphql`
  query GetPage($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default Page
