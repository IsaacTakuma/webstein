import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <p
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <small>
        &copy; Copyright {new Date().getFullYear()} {siteTitle} All Rights
        Reserved.
      </small>
    </p>
  </footer>
)

export default Footer
