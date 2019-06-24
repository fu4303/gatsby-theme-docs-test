import React from "react";

function Aside({ as: Comp = "aside", size = "20rem", ...rest }) {
  return <Comp css={{ flexGrow: 1, flexBasis: size }} {...rest} />;
}

function Main({ as: Comp = "main", minWidth = "50%", ...rest }) {
  return <Comp css={{ flexGrow: "999", flexBasis: 0, minWidth }} {...rest} />;
}

function Sidebar({ as: Comp = "div", ...rest }) {
  return (
    <Comp
      css={{
        display: "flex",
        flexWrap: "wrap",
      }}
      {...rest}
    />
  );
}

Sidebar.Aside = Aside;
Sidebar.Main = Main;

export default Sidebar;
