const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const Pages = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (Pages.errors) {
    reporter.panicOnBuild("🚨  ERROR: Generating General pages")
  }

  Pages.data.allMdx.edges.forEach(({ node }, index) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: { id: node.id },
    })
  })
}
