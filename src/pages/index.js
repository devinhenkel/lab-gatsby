import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import("./index.scss")

const IndexPage = () => (
  <Layout>
    
    <SEO title="home" />
    <div style={{ maxWidth: `600px`, margin: `auto`, marginTop: `10%` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
