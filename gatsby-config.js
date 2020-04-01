module.exports = {
  pathPrefix: '/profiserwis',
  siteMetadata: {
    title: `Profi Serwis website`,
    description: `Profi Serwis jest polską firmą inżynierską z 10-letnim doświadczeniem w branży automatyki przemysłowej. Zajmuje się kompleksową obsługą firm produkcyjnych i instalacyjnych w zakresie projektowania, produkcji oraz dostaw akcesoriów elektrotechnicznych.`,
    author: `dawidkajdak@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo/ps-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
