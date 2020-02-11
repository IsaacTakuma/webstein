import React from "react"
import { Link } from "gatsby"

import HeroImage from "./heroImage"

const PostList = ({ node }) => {
  return (
    <>
      <article className="post" key={node.id}>
        <HeroImage
          className="samune"
          filename={node.frontmatter.heroImage.relativePath}
        />
        <div className="desc">
          <h3 className="desc__title">{node.frontmatter.title}</h3>
          <time className="desc__time">{node.frontmatter.date}</time>
          <Link className="desc__tag" to={`category/${node.fields.category}`}>
            {node.fields.category}
          </Link>
          <p className="desc__summary">{node.excerpt}</p>
          <Link className="toPost" to={node.fields.slug}>
            Read More
          </Link>
        </div>
      </article>
    </>
  )
}

export default PostList
