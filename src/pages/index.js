import React from "react"

import SEO from "../components/seo"
import Hero from "../components/Content/Hero"
import Experience from "../components/Content/Experience"
import About from "../components/Content/About"
import ClientOnly from "../components/ClientOnly"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ClientOnly>
      <Hero />
      <About />
      <Experience />
    </ClientOnly>
  </>
)

export default IndexPage
