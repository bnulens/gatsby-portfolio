import React from "react"
import "../i18n"

import SEO from "../components/seo"
import Hero from "../components/Content/Hero"
import Experience from "../components/Content/Experience"
import About from "../components/Content/About"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
    <Experience />
  </>
)

export default IndexPage
