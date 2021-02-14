import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import notFoundGif from "../images/404.gif"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container not-found">
      <h1>You're Lost</h1>
      <img src={notFoundGif} style={{maxWidth: 320, maxHeight: 240}} alt="404" />
      <h2>Let's go to <Link to="/">Home Page</Link></h2>
    </div>
  </Layout>
)

export default NotFoundPage
