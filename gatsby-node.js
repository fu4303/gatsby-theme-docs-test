exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
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

  pages.forEach(page => {
    actions.createPage({
      path: `/${page.name}`,
      component: require.resolve('./src/templates/docs.js'),
      context: {
        nav: pages.map(p => {
          return {
            id: p.id,
            path: `/${p.name}`,
            name: p.name,
            current: p.id === page.id,
          };
        }),
        body: page.childMdx.code.body,
      },
    });
  });
};
