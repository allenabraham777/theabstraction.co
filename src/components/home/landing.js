import React from 'react'
import LandingImage from './images/landing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Landing = () => {
  return (
    <div className="container landing section">
      <div className="left">
        <div className="title">
          Learning is an Abstract Layer
          </div>
        <div className="subtitle">
          Let's make it strong
          </div>
        <a href="#about" className="get-started">View More &nbsp;<FontAwesomeIcon icon={faArrowDown} size="md"/></a>
      </div>
      <div className="right">
        <LandingImage />
      </div>
    </div>
  )
}

export default Landing
