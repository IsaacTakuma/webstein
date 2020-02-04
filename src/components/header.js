import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `14px 10px`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: "#ffffff",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
