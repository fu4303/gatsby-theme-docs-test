module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blah',
        path: `${__dirname}/src`,
      },
    },
  ],
};
