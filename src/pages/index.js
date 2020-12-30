import React from "react"

import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/Content/About"
import Experience from "../components/Content/Experience"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <Experience/>
  </>
)

export default IndexPage
