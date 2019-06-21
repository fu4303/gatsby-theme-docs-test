import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

// function Playground({ children, scope }) {
//   return (
//     <LiveProvider code={children} scope={scope}>
//       <LiveEditor />
//       <LiveError />
//       <LivePreview />
//     </LiveProvider>
//   );
// }

function formatJsx({ mdxType, children, originalType: _, ...rest }) {
  const props = Object.entries(rest).reduce(
    (props, [key, val]) => props + ` ${key}={${val}}`,
    ""
  );
  return children
    ? `<${mdxType} ${props}>${children}</${mdxType}>`
    : `<${mdxType} ${props} />`;
}

function Playground(props) {
  return (
    <div
      style={{
        display: "grid",
        border: "0.5rem solid",
        gridTemplateColumns: "1fr 1fr"
      }}
    >
      <div style={{ padding: 32, background: "hsl(220, 10%, 94%)" }}>
        {formatJsx(props.children.props)}
      </div>
      <div style={{ padding: 32, borderLeft: "0.5rem solid" }}>
        {props.children}
      </div>
    </div>
  );
}

export default Playground;
