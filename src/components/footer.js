import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <p>
      <small>
        &copy; Copyright {new Date().getFullYear()} {siteTitle} All Rights
        Reserved.
      </small>
    </p>
  </footer>
)

export default Footer
