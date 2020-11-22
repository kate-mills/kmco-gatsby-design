import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia} from "../components"

const ProjectsPage = ({data}) => {
  const {allAirtable:{nodes:projects}} = data
  return (
    <Wrapper>
      <Layout>
        <Projects projects={projects} title={"all projects"} showAllProjectsBtn/>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`



export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, sort: {order: DESC, fields: data___date}) {
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


export default ProjectsPage
