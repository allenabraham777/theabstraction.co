import React from 'react'
import LandingImage from './images/landing';

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
        <button className="get-started">Get Started</button>
      </div>
      <div className="right">
        <LandingImage />
      </div>
    </div>
  )
}

export default Landing
