import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import Landing from "../components/home/landing";
import About from "../components/home/about";
import Socials from "../components/home/socials";

const IndexPage = () => {
  return (
    <Layout fullpage>
      <SEO title="Home" />
      <Landing />
      <About />
      <Socials />
    </Layout>
  )
}

export default IndexPage
