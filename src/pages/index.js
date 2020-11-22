import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  BasicHero,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({data}) => {
  const {allAirtable:{nodes:projects}} = data
  return (
    <Layout>
      <BasicHero/>
      <About/>
      <Projects projects={projects} title={"latest projects"} showAllProjectsBtn/>
      <Slider/>
      <Survey title={"Top Social Media Platforms"}/>
    </Layout>
  )
}


export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 3, sort: {order: DESC, fields: data___date}) {
      nodes {
        id
        data {
          name
          date
          type
          image {
            id
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
