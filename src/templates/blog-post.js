import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article className="post">
          <h1>{post.frontmatter.title}</h1>
          <time>{post.frontmatter.date}</time>
          <Link
            className="category-link"
            to={`category/${post.fields.category}/`}
          >
            {post.frontmatter.category}
          </Link>
          <div
            className="post__wrap"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Link to="/">Go back to the home</Link>
        </article>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
      }
      fields {
        category
      }
    }
  }
`

export default BlogPostTemplate
