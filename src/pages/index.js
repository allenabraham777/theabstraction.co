import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout fullpage>
      <SEO title="Home" />
      <div className="container landing section">
        <div className="left">
          <div className="title">
            Learning is an Abstraction
          </div>
          <div className="subtitle">
            Let's make it strong
          </div>
          <button className="get-started">Get Started</button>
        </div>
        <div className="right">
        <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
      <div className="container landing section">
        <div className="title">
          Knowledge is Function
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "landing-image.png"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default IndexPage
