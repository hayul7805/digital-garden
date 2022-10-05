module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/main`,
        prismPreset: `github`
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: `Hayul's Tech Garden`,
  },
}
