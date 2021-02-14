import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="section">
      <div className="container contents">
        <div>
          <h1>Projects</h1>
          <ul>
            <li><a href="https://github.com/abstractionhere/git-docs-malayalam">Git Malayalam Docs</a></li>
            <li><a href="https://github.com/abstractionhere/speech-to-text-web-api-react">React Speech to Text</a></li>
            <li><a href="https://github.com/abstractionhere/web-dev-completed">HTML5 Portfolio Website</a></li>
          </ul>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li><Link to="/attributions">Website Credits</Link></li>
            <li><a href="https://github.com/abstractionhere/theabstraction.co">Website Source</a></li>
            <li><a href="https://github.com/abstractionhere">Github</a></li>
          </ul>
        </div>
        <div>
          <h1>Social</h1>
          <ul>
            <li><a href="https://twitter.com/abstractionhere">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/abstractionhere">Linkedin</a></li>
            <li><a href="https://www.youtube.com/theabstraction">Youtube</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div>
          Made with <span role="img" aria-label="Heart">💗</span> and <span role="img" aria-label="Coffee">☕</span> in Kochi
        </div>
        <div>
          &copy; <a href="http://allenkabraham.me">Allen K Abraham</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
