module.exports = {
  pathPrefix: "/fodmap",
  siteMetadata: {
    title: `Fodmap·DB`,
    description: `The FODMAP diet can help you reduce the symptoms of IBS. Learn which foods are high or low FODMAP.`,
    author: `L. Burdock`,
    pages: [
      {
        id: 1,
        text: "Food list",
        url: "/",
      },
      {
        id: 2,
        text: "About",
        url: "/about",
      },
      {
        id: 3,
        text: "Sources",
        url: "/sources",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fodmap DB`,
        short_name: `Fodmap`,
        start_url: `/`,
        background_color: `#00d1b2`,
        theme_color: `#00d1b2`,
        display: `minimal-ui`,
        icon: `src/images/fodmap-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      name: "data",
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
