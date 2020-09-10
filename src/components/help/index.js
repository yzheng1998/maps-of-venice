import React from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledTitle = withStyles({
  root: {
    fontSize: 14,
    fontFamily: "Avenir",
  },
})(Typography);

export default function Help(props) {
  const { visible, text } = props;

  return (
    <>
      {visible && (
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255, .7)",
            border: ".5px solid grey",
            borderRadius: "5px",
            padding: "2px",
            margin: "5px 0px",
          }}
        >
          <StyledTitle>{text}</StyledTitle>
        </div>
      )}
    </>
  );
}
