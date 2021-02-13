import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="section">
      <div className="container contents">
        <div>
          <h1>Projects</h1>
          <ul>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
          </ul>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li><Link to="/attributions">Credits</Link></li>
            <li>Link1</li>
            <li>Link1</li>
          </ul>
        </div>
        <div>
          <h1>Social</h1>
          <ul>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div>
          Made with 💗 and ☕ in Kochi
        </div>
        <div>
          &copy; <a href="http://allenkabraham.me">Allen K Abraham</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
