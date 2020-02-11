import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  return (
    <Layout location={location}>
      <SEO title={category} />
      <div className="post-wrap">
        <h2 className="post-wrap__title">{category}</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <PostList key={node.fields.slug} node={node} />
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___num }
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
            category
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            heroImage {
              relativePath
            }
          }
        }
      }
    }
  }
`

export default CategoryTemplate
