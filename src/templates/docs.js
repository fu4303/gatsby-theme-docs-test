import { MDXProvider } from "@mdx-js/react";

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
};

export default ({ pageContext }) => (
  <MDXProvider components={components}>
    <nav>
      <ul>
        {pageContext.nav.map(({ id, name, path, current }) => (
          <li key={id}>
            <Link to={path} style={{ color: current && 'tomato' }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <MDXRenderer>{pageContext.body}</MDXRenderer>
  </MDXProvider>
);
