import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import MainCard from "../components/main-card/main-card"
import SecondaryCard from "../components/secondary-card/secondary-card"
import { ParallaxBackground } from "../components/parallax"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const HomeIndex = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Jonathan Fernández Mertanen" lang={"en"} />
      <ParallaxBackground />
      <MainCard />
      <SecondaryCard />
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
