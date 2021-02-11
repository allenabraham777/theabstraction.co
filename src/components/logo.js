import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
  query Logo {
    image: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fixed(
          height: 48
        ) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`);
  console.log(data);
  return <Img
  fixed={data.image.childImageSharp.fixed}
  alt="Logo"
  style={{
    filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white)'
  }}
  />
}

export default Logo
