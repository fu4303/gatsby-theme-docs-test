import React from "react";
import { mdx } from "@mdx-js/react";
import { useMDXScope } from "gatsby-mdx/context";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

function Playground({ codeString, live }) {
  const scope = useMDXScope(); // pass any imports in scope for the page
  return (
    <LiveProvider
      disabled={!live}
      code={codeString}
      scope={{ mdx, ...scope }}
      // add pragma so Shortcode components in context work
      transformCode={code => "/* @jsx mdx */" + code}
    >
      <Switcher css={{ border: "0.5rem solid hsl(220, 10%, 60%)" }}>
        <Editor contentEditable={live} codeString={codeString} />
        {live && <Preview />}
      </Switcher>
      <LiveError />
    </LiveProvider>
  );
}

function Row({ as: Comp = "div", ...rest }) {
  return <Comp css={{ display: "flex" }} {...rest} />;
}

function Switcher({ as: Comp = "div", ...rest }) {
  return (
    <Comp
      css={{
        "@media(min-width: 40em)": {
          display: "flex",
          "& > *": {
            flex: 1,
          },
        },
      }}
      {...rest}
    />
  );
}

function useToast({ duration = 1000 } = {}) {
  const [toast, setToast] = React.useState("");
  React.useEffect(() => {
    let id;
    if (toast) {
      id = window.setTimeout(() => setToast(""), duration);
    }
    return () => window.clearTimeout(id);
  }, [toast]);
  return { toast, setToast };
}

function Editor({ codeString, ...rest }) {
  const [code, setCode] = React.useState(codeString);
  const { toast, setToast } = useToast();

  function copy() {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setToast("Copied");
      })
      .catch(error => {
        console.error(error);
        setToast("Failed");
      });
  }
  return (
    <div>
      <button onClick={copy}>Copy</button>
      <LiveEditor
        css={{ padding: "1.5rem", fontSize: "1rem" }}
        {...rest}
        onChange={setCode}
      />
      {toast && <div>{toast}</div>}
    </div>
  );
}

function Preview(props) {
  const [theme, setTheme] = React.useState("light");
  const BG = {
    light: "#fff",
    dark: "hsl(220, 20%, 20%)",
  };
  return (
    <div css={{ backgroundColor: BG[theme] }}>
      <Row>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("light")}>Light</button>
      </Row>
      <LivePreview css={{ padding: "1.5rem" }} {...props} />
    </div>
  );
}

export default Playground;
