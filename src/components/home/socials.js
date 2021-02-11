import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
    <div className="container section socials">
      <h1 className="title">Socials</h1>
      <div className="icons">
        <div className="icon">
          <a href="" className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="icon">
        <a href="" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials
