import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { preToCodeBlock } from "mdx-utils";
import Global from "../components/Global";
import Sidebar from "../components/Sidebar";
import Stack from "../components/Stack";
import Nav from "../components/Nav";
import Playground from "../components/Playground";

const components = {
  wrapper: props => <Stack space="1.5rem" {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      // if there's a codeString and some props, we passed the test
      return <Playground {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
};

export default ({ pageContext }) => (
  <MDXProvider components={components}>
    <Global />
    <Sidebar css={{ minHeight: "100vh" }}>
      <Sidebar.Aside
        css={{ backgroundColor: "hsl(220, 30%, 94%)", padding: "2rem" }}
      >
        <Stack space="2rem">
          <div css={{ fontSize: "1.5rem", fontWeight: "900" }}>
            {pageContext.siteTitle}
          </div>
          <Nav>
            {pageContext.nav.map(({ id, name, path, current }) => (
              <Nav.Item key={id} href={path} current={current}>
                {name}
              </Nav.Item>
            ))}
          </Nav>
        </Stack>
      </Sidebar.Aside>
      <Sidebar.Main css={{ padding: "2rem" }}>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </Sidebar.Main>
    </Sidebar>
  </MDXProvider>
);
