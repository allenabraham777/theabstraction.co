import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image';

const ListCard = ({ blog }) => {
  return (
    <Link to={blog.path} className="card">
      <div className="thumbnail">
        <Img fluid={blog.thumbnail.childImageSharp.fluid} style={{width: "100%", height: "100%"}}/> 
      </div>
      <div className="details">
        <h1 className="title" >
          {blog.title}
        </h1>
        <p className="description">
          {blog.description}
        </p>
        <div className="date">
          {blog.date}
        </div>
      </div>
    </Link>
  )
}

export default ListCard
