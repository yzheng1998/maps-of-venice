import React from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledTitle = withStyles({
  root: {
    fontSize: 16,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
})(Typography);

export default function Subtitle(props) {
  const { text, style } = props;

  return (
    <div
      style={{
        // backgroundColor: "rgb(255, 255, 255, .7)",
        // border: ".5px solid grey",
        // borderRadius: "5px",
        // padding: "2px",
        // margin: "5px 0px",
        ...style,
      }}
    >
      <StyledTitle>{text}</StyledTitle>
    </div>
  );
}
