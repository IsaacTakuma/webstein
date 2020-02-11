import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="" />
      <div className="post-wrap">
        <h2 className="post-wrap__title">最新記事</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <PostList key={node.fields.slug} node={node} />
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
