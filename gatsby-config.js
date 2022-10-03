module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/main`,
      },
    },
  ],
  siteMetadata: {
    title: `Hayul's Tech Garden`,
  },
}
