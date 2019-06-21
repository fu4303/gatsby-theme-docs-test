import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { preToCodeBlock } from "mdx-utils";
import Playground from "../components/Playground";
import Code from "../components/mdx/Code";

const components = {
  Playground,
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  }
};

export default ({ pageContext }) => (
  <MDXProvider components={components}>
    <nav>
      <ul>
        {pageContext.nav.map(({ id, name, path, current }) => (
          <li key={id}>
            <Link to={path} style={{ color: current && "tomato" }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <MDXRenderer>{pageContext.body}</MDXRenderer>
  </MDXProvider>
);
