import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import Landing from "../components/home/landing";

const IndexPage = () => {
  return (
    <Layout fullpage>
      <SEO title="Home" />
      <Landing/>
      <div className="container landing section">
        <div className="title">
          Knowledge is Function
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
