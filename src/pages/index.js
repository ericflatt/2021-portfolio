import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Eyes from "../components/Eyes"

import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <Eyes />
    <Hero />
    <Footer />
    </Layout>
)

export default IndexPage
