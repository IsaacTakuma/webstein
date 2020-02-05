import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <div>
      <h1
        style={{
          margin: "0 0 1em 0",
        }}
      >
        This is about page
      </h1>
      <p>
        このサイトは静的サイトの制作方法を学ぶためにGatsbyJSの技術を使用して制作したブログです。
      </p>
      <p>今後拡張していく予定。</p>
    </div>
  </Layout>
)

export default AboutPage
