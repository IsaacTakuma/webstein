import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import Image from "./image"

const Header = () => (
  <header id="js-header">
    <h1 className="menu-inner">
      <Link to="/">
        <Image className="logo" filename="logo.png" alt="webStein;" />
      </Link>
    </h1>
    <div className="news menu-inner">
      <p>卒業展示中</p>
    </div>
    <div className="menu-inner">
      <span className="page-type">page</span>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      <span className="page-type">category</span>
      <ul>
        <li>
          <Link to="/category/tech">tech</Link>
        </li>
        <li>
          <Link to="/category/gatsby">gatsby</Link>
        </li>
      </ul>
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
