require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
 const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `devsalon`,
    description: `We build `,
    author: `@kate-mills`,
    titleTemplate: `%s | devsalon`,
    url: `https://gatsby-airtable-design-project.netlify.app/`,
    image: `black-feathers.jpg`,
    twitterUsername: `@katie_napa`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kate Mills Company`,
        short_name: `devsalon`,
        start_url: `/`,
        background_color: `#DBDBDB`,
        theme_color: `#b0696f`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
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
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require('./src/constants/algolia'),
        chunkSize: 10000,
      }
    },
  ],
}
