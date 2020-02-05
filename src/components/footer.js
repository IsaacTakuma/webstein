import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <p className="l-inner">
      <small>
        &copy; Copyright {new Date().getFullYear()} {siteTitle} All Rights
        Reserved.
      </small>
    </p>
  </footer>
)

export default Footer
