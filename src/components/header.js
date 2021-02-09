import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: 60,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <div>
      <h1>The Abstraction</h1>
    </div>
    <div>
      <Link to="/blogs">Blogs</Link>
    </div>
  </header>
)

export default Header
