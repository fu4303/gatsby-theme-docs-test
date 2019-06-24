import React from "react";
import { Global as GlobalStyles } from "@emotion/core";

function Global(props) {
  return (
    <GlobalStyles
      styles={{
        "*": {
          margin: 0,
        },
        body: {
          fontSize: "1.25rem",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
          color: "hsl(210, 20%, 20%)",
        },
        a: {
          color: "inherit",
        },
        ul: {
          listStyle: "none",
          padding: 0,
        },
        h1: {
          margin: 0,
        },
      }}
      {...props}
    />
  );
}

export default Global;
