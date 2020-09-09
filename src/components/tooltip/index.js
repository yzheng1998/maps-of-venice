import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 12,
  },
  body: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 10,
  },
});

export default function Tooltip() {
  const { hoveredObj } = useSelector((state) => state);

  const classes = useStyles();

  return (
    <>
      {hoveredObj.obj && (
        <div
          style={{
            backgroundColor: "rgba(46, 46, 46, 0.8)",
            padding: 8,
            position: "absolute",
            top: hoveredObj.y,
            left: hoveredObj.x,
          }}
        >
          <Typography classes={{ root: classes.title }}>
            {hoveredObj.obj.properties.name} ({hoveredObj.obj.properties.year})
          </Typography>
        </div>
      )}
    </>
  );
}
