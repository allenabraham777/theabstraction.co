import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../layouts/default'

const AttributionsPage = ({data}) => {
  return (
    <Layout>
      <div className="container attributions">
        <h1>Credits</h1>
        <div dangerouslySetInnerHTML={{__html: data.attributions.html}} style={{padding: "32px 0px"}}></div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Attributions {
    attributions: markdownRemark(fileAbsolutePath: {regex: "/attributions/attributions.md$/"}) {
      html
    }
  }
`;

export default AttributionsPage
