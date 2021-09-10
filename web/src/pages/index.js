import * as React from "react"
import { Helmet } from "react-helmet"
import "../css/styles.css"
import YAMLData from "../contents/content.yaml"
import Footer from "../components/Footer"
import Hero from "../components/Hero.js"
import Nakji from "../components/Nakji.js"
import Navbar from "../components/Navbar"
import RichestBlockchain from "../components/RichestBlockchain"
import Testimonials from "../components/Testimonials"
import UseCases from "../components/UseCases"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{YAMLData.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="../js/swiper-bundle.min.js"></script>
        <script src="../js/script.js"></script>
      </Helmet>
      <div class="bg-black-100 overflow-hidden">
        <Navbar data={YAMLData.content.navbar} />
        <Hero data={YAMLData.content.hero} />
        <RichestBlockchain data={YAMLData.content.richestBlockchain} />
        <Nakji data={YAMLData.content.nakji} />
        <UseCases data={YAMLData.content.useCases} />
        <Testimonials data={YAMLData.content.testimonials} />
        <Footer data={YAMLData.content.footer} />
      </div>
    </>
  )
}

export default IndexPage
