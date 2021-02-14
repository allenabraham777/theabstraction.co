import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header>
      <div className="container">
        <span className="brand-container">
          <Logo/>
          <h1 className="brand">
            <Link to="/">
              The Abstraction
            </Link>
          </h1>
        </span>
        <label htmlFor="hamburger" className="hamburger-label">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <input type="checkbox" id="hamburger" className="hamburger" />
        <nav className="menu">
          <ul>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
