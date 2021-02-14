import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
    <div className="container section socials">
      <h1 className="title">Let's Connect</h1>
      <div className="icons">
        <div className="icon">
          <a href="https://twitter.com/abstractionhere" className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="icon">
        <a href="https://www.linkedin.com/company/abstractionhere" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials
