import React from "react";

function Stack({ as: Comp = "div", space = "1rem", ...rest }) {
  return <Comp css={{ "& > * + *": { marginTop: space } }} {...rest} />;
}

export default Stack;
