exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: { extension: { eq: "mdx" } }) {
        edges {
          node {
            id
            name
            childMdx {
              code {
                body
              }
            }
          }
        }
      }
    }
  `);

  const pages = result.data.allFile.edges.map(({ node }) => node);

  const getPath = page =>
    page.name === "index" ? "/" : `/${page.name.toLowerCase()}`;
  pages.forEach(page => {
    actions.createPage({
      path: getPath(page),
      component: require.resolve("./src/templates/docs.js"),
      context: {
        siteTitle: result.data.site.siteMetadata.title,
        nav: pages.map(p => {
          return {
            id: p.id,
            path: getPath(p),
            name: p.name,
            current: p.id === page.id,
          };
        }),
        body: page.childMdx.code.body,
      },
    });
  });
};
