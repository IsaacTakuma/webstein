import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article className="entry">
          <HeroImage
            className="entry__samune"
            filename={post.frontmatter.heroImage.relativePath}
          />
          <h2 className="entry__title">{post.frontmatter.title}</h2>
          <time className="entry__time">{post.frontmatter.date}</time>
          <Link className="entry__tag" to={`category/${post.fields.category}/`}>
            {post.fields.category}
          </Link>
          <div
            className="entry__content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
        heroImage {
          relativePath
        }
      }
      fields {
        category
      }
    }
  }
`

export default BlogPostTemplate
