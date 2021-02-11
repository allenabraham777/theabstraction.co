import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Header = () => {
  return (
    <header>
      <div className="container">
        <span className="brand-container">
          <Logo/>
          <h1 className="brand">
            The Abstraction
          </h1>
        </span>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/blogs">Blogs</Link>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
