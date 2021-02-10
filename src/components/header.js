import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1 className="brand">The Abstraction</h1>
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

export default Header
