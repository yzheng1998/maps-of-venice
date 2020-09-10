import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subtitle: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 14,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "Bold",
  },
});

export default function Tooltip(props) {
  const classes = useStyles();

  const { xFormatted, yFormatted } = props;

  return (
    <div
      style={{
        backgroundColor: "rgba(46, 46, 46, 0.8)",
        padding: 8,
      }}
    >
      <Typography classes={{ root: classes.title }}>{xFormatted}</Typography>
      <Typography classes={{ root: classes.subtitle }}>
        Population: {yFormatted}
      </Typography>
    </div>
  );
}
