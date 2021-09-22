import React from "react"
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton } from "../utils"
import SEO from "../components/seo"
import img from "../images/bcg/homeBcg.jpg"
import QuickInfo from "../components/HomeComponents/QuickInfo"
//import Gallery from "../components/HomeComponents/Gallery"
//import Menu from "../components/HomeComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Fine Dining" subtitle="80, Haile sellasie Road- Nairobi,">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
