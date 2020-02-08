import React from "react"
import { Link } from "gatsby"

import Image from "./image"

class Menu extends React.Component {
  render() {
    // let menu = document.getElementById("js-menu")
    // let header = document.getElementById("js-header")
    // let logo = document.getElementById("sp-logo")

    // menu.onclick = () => {
    //   header.classList.toggle("open")
    //   logo.classList.toggle("none")
    // }
    return (
      <div className="pc-none">
        <div className="sp-bar">
          <Link to="/">
            <Image
              className="sp-logo"
              id="js-logo"
              filename="logo.png"
              alt="webStein;"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Menu
