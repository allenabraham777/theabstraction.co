import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const LandingImage = () => {
  const data = useStaticQuery(graphql`
  query Image {
    image: file(relativePath: {eq: "cover.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
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
