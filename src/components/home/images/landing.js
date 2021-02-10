import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const LandingImage = () => {
  const data = useStaticQuery(graphql`
  query Image {
    image: file(relativePath: {eq: "cover.jpg"}) {
      childImageSharp {
        fixed(
          width: 400
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
  return <>
  <Img
  fluid={data.image.childImageSharp.fluid}
  alt="Hero"
  style={{width: "100%"}}
  />
  </>
}

export default LandingImage
