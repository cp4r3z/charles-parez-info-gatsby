module.exports = {
  siteMetadata: {
    siteUrl: "https://charles.parez.info",
    title: "Charles Parez",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon/favicon-source-cjp-head-1500.png`,
        // name: `GatsbyJS`,
        // short_name: `GatsbyJS`,
        // start_url: `/`,
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        // display: `standalone`,
      },
    },
  ],
};
