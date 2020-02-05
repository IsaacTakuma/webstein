import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="post-wrap">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article className="post" key={node.id}>
            <HeroImage
              className="samune"
              filename={node.frontmatter.heroImage.relativePath}
            />
            <div className="desc">
              <h3 className="desc__title">{node.frontmatter.title}</h3>
              <time className="desc__time">{node.frontmatter.date}</time>
              <Link
                className="desc__tag"
                to={`category/${node.fields.category}`}
              >
                {node.fields.category}
              </Link>
              <p className="desc__summary">{node.excerpt}</p>
              <Link className="toPost" to={node.fields.slug}></Link>
            </div>
          </article>
        ))}
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
