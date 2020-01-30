import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  return (
    <Layout location={location} title={`Posts in category "${category}"`}>
      <SEO title={`Category: "${category}"`} />
      <h1>Category: {category}</h1>
      <h4
        style={{
          margin: "8px 0 16px",
        }}
      >
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <time>{node.frontmatter.date}</time>
          <Link
            className="category-link"
            to={`category/${node.fields.category}/`}
          >
            {node.fields.category}
          </Link>
          <p className="excerpt">{node.excerpt}</p>
          <Link to={node.fields.slug}>Read More</Link>
        </article>
      ))}
      <Link to="/">Go back to the home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default CategoryTemplate
