module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Docs",
  },
  plugins: [
    {
      resolve: "gatsby-mdx",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blah",
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
