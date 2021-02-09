import { graphql } from 'gatsby'
import React from 'react';
import Layout from '../layouts/default';

const PostTemplate = ({data: {markdownRemark: post}}) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>
        <big><b>Posted On</b>: {post.frontmatter.date}</big>
      </p>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
  )
}

export const postQuery = graphql`
query MyQuery($path: String) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    frontmatter {
      date
      title
    }
    html
  }
}
`

export default PostTemplate
