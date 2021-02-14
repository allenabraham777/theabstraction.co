import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

import '../styles/blogs.scss';
import ListCard from '../components/blogs/listCard';
import SEO from '../components/seo';

const BlogsPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="container blogs">
        <h1 className="heading">Let's have some fun reading</h1>
        <div className="blog-list">
          {
            data.allMarkdownRemark.edges.map(
              ({node: {id, frontmatter: blog}}) => <ListCard key={id} blog={blog}/>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query AllBlogPosts {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: {regex: "/blogs/.*md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          published
          date
          path
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`;

export default BlogsPage
