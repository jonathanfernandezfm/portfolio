import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import MainCard from "../components/main-card/main-card"
import SecondaryCard from "../components/secondary-card/secondary-card"
import ParallaxMousemove from "react-parallax-mousemove"

import SmallStarsBack from "../assets/images/small_stars_back.svg"
import SmallStarsBack2 from "../assets/images/small_stars_back_2.svg"
import BigStarsBack from "../assets/images/big_stars_back.svg"
import BigStarsBack2 from "../assets/images/big_stars_back_2.svg"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const styles = {
  layerSmall: {
    position: "absolute",
    zIndex: 1,
    transform: "translate(8%, 5%)",
    opacity: 0.4,
  },
  layerSmall2: {
    position: "absolute",
    zIndex: 1,
    transform: "translate(12%, 0)",
    opacity: 0.7,
  },
  layerBig: {
    position: "absolute",
    zIndex: 1,
    transform: "translate(8%, 3%)",
    opacity: 0.5,
  },
  layerBig2: {
    position: "absolute",
    zIndex: 1,
    transform: "translate(3%, 0)",
    opacity: 0.9,
  },
}

const HomeIndex = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Jonathan" />
      <ParallaxMousemove>
        <ParallaxMousemove.Layer
          layerStyle={styles.layerSmall}
          config={{
            xFactor: 0.01,
            yFactor: 0.01,
            springSettings: {
              stiffness: 35,
              damping: 10,
            },
          }}
        >
          <img src={SmallStarsBack} alt="" />
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
      <ParallaxMousemove>
        <ParallaxMousemove.Layer
          layerStyle={styles.layerSmall2}
          config={{
            xFactor: 0.03,
            yFactor: 0.03,
            springSettings: {
              stiffness: 50,
              damping: 10,
            },
          }}
        >
          <img src={SmallStarsBack2} alt="" />
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
      <ParallaxMousemove>
        <ParallaxMousemove.Layer
          layerStyle={styles.layerBig}
          config={{
            xFactor: 0.05,
            yFactor: 0.05,
            springSettings: {
              stiffness: 35,
              damping: 10,
            },
          }}
        >
          <img src={BigStarsBack} alt="" />
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
      <ParallaxMousemove>
        <ParallaxMousemove.Layer
          layerStyle={styles.layerBig2}
          config={{
            xFactor: 0.04,
            yFactor: 0.04,
            springSettings: {
              stiffness: 50,
              damping: 10,
            },
          }}
        >
          <img src={BigStarsBack2} alt="" />
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
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
