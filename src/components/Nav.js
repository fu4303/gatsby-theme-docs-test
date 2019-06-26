import React from "react";
import { Link } from "gatsby";
import Stack from "./Stack";

function Item({ as: Comp = "li", href, current, ...rest }) {
  return (
    <Comp>
      <Link
        to={href}
        css={{
          textTransform: "capitalize",
          textDecoration: "none",
          fontWeight: current ? 900 : 600,
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        {...rest}
      />
    </Comp>
  );
}

function Nav(props) {
  return (
    <nav>
      <Stack as="ul" space="0.5rem" {...props} />
    </nav>
  );
}

Nav.Item = Item;

export default Nav;
