module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/Users/hyp/Desktop/git_blog/Posting/digital-garden/src/site/notes/main.md`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: `Hayul's digital garden`,
  },
}
