import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>Hi from the about page</h1>
    <p>Welcome to about</p>
    <Link to="/">Go back to the home</Link>
  </Layout>
)

export default AboutPage
