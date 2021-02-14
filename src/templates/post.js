import { graphql, Link } from 'gatsby'
import React from 'react';
import Layout from '../layouts/default';
import ReactUtterences from 'react-utterances'

import '../styles/post.scss'
import SEO from '../components/seo';

const PostTemplate = ({ data: { markdownRemark: post } }) => {

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.title} />
      <div className="container post">
        <h1 className="title">{post.frontmatter.title}</h1>
        <div className="credits">
          <div className="image">
            <img src={`https://github.com/${post.frontmatter.author}.png?size=70`} alt={post.frontmatter.name} />
          </div>
          <div className="details">
            <div className="author">
              <Link to={`https://github.com/${post.frontmatter.author}`}>{post.frontmatter.name}</Link>
            </div>
            <div className="date">
              <big><b>Posted On</b>: {post.frontmatter.date}</big>
            </div>
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="comments">
        <h2>Comments</h2>
        <ReactUtterences repo={'abstractionhere/blogs-comment'} type={'pathname'} />
        <p className="privacy">Comments will br processed with the privacy policy of <a href="https://utteranc.es/">utterances</a> and <a href="https://github.com/">github</a></p>
        </div>
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
      description
      author
      name
    }
    html
  }
}
`

export default PostTemplate
