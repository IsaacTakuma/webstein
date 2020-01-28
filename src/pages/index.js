import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>MyBlog</h1>
        <h4
          style={{
            margin: "8px 0 16px",
          }}
        >
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <span>
              {node.frontmatter.title} — {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>read</Link>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
          excerpt
        }
      }
    }
  }
`
