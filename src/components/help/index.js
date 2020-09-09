import React from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const StyledTitle = withStyles({
  root: {
    fontSize: 16,
    fontFamily: "Avenir",
  },
})(Typography);

export default function Title(props) {
  const { visible } = props;

  return (
    <>
      {visible && (
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 40,
            width: "15%",
            backgroundColor: "rgb(255, 255, 255, .7)",
            border: ".5px solid grey",
            borderRadius: "5px",
            padding: "2px",
          }}
        >
          <StyledTitle>Hold shift to compare with base map</StyledTitle>
        </div>
      )}
    </>
  );
}
