import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  BasicHero,
  About,
  Survey,
  Slider,
  GridProjects,
} from "../components"

import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Home"/>
      <BasicHero />
      <About />
      <GridProjects
        projects={projects}
        title={"latest projects"}
        showAllProjectsBtn
      />
      <Slider />
      <Survey title={"Top Social Media Platforms"} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { order: DESC, fields: data___date }
    ) {
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
