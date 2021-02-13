import { graphql } from 'gatsby'
import React from 'react';
import Layout from '../layouts/default';

import './post.scss'

const PostTemplate = ({data: {markdownRemark: post}}) => {
  return (
    <Layout>
      <div className="container post">
        <h1 className="title">{post.frontmatter.title}</h1>
        <div className="date">
          <big><b>Posted On</b>: {post.frontmatter.date}</big>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: post.html}} />
      </div>
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
