import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>MyPosts</h2>
      <h4
        style={{
          margin: "8px 0 16px",
        }}
      >
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <HeroImage
            filename={node.frontmatter.heroImage.relativePath}
          ></HeroImage>
          <h3>{node.frontmatter.title}</h3>
          <time style={{ margin: "0 8px 0 0" }}>{node.frontmatter.date}</time>
          <Link to={`category/${node.fields.category}`}>
            {node.fields.category}
          </Link>
          <p className="excerpt">{node.excerpt}</p>
          <Link to={node.fields.slug}>Read More</Link>
        </article>
      ))}
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
