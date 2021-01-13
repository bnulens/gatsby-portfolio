import React from "react"

import SEO from "../components/seo"
import Hero from "../components/Content/Hero"
import Experience from "../components/Content/Experience"
import GatsbyScroll from "../components/Content/GatsbyScroll"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero/>
    <GatsbyScroll/>
    <Experience/>
  </>
)

export default IndexPage
