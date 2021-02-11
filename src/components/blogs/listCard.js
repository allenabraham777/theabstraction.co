import { Link } from 'gatsby'
import React from 'react'

const ListCard = ({ blog }) => {
  return (
    <div className="card">
      <h1 className="title">
        {blog.title}
      </h1>
      <div className="date">
        <strong>Published on: </strong>{blog.date}
      </div>
      <div className="path">
        <Link to={blog.path}>View More</Link>
      </div>
    </div>
  )
}

export default ListCard
