import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/styles/index.scss'
import MainCard from "../components/main-card/main-card"

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
      <SEO title="Jonathan" />
      <MainCard/>
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