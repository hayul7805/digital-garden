module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/posts`,
        rootNote: `/main`,
      },
    }
  ],
  siteMetadata: {
    title: `Hayul's Tech Garden`,
  }
}
