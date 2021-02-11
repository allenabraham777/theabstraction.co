import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

import './blogs.scss';
import ListCard from '../components/blogs/listCard';

const BlogsPage = ({data}) => {
  return (
    <Layout>
      <div className="container blogs">
        <h1>Blogs</h1>
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
    edges {
      node {
        frontmatter {
          title
          published
          date
          path
        }
      }
    }
  }
}`;

export default BlogsPage
