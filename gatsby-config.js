module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/notes`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: `Hayul's digital garden`,
  },
}
