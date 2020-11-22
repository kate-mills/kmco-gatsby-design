require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `KMCO Design`,
    description: `Gatsby Airtable Example. Built using Airtable, Algolia Search, Gatsby Background Image plugin and  React Context API. Containts two sliders, real-time Airtable updates and submenus. Styled using Styled-Components. `,
    author: `@kate-mills`,
    titleTemplate: `%s | Kate Mills Company`,
    url: `https://gatsby-airtable-design-project.netlify.app/`,
    image: `tree.jpg`,
    twitterUsername: `@john_smilga`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-source-airtable`,
      options:{
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_STORE_BASE_ID,
            tableName:`Projects`,
            mapping:{image:`fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_STORE_BASE_ID,
            tableName:`Customers`,
            mapping:{image:`fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_STORE_BASE_ID,
            tableName: `Survey`
          },
        ]
      }
    }
  ],
}
