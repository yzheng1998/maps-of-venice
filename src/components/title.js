import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const StyledTitle = withStyles({
  root: {
    fontSize: 16,
    fontFamily: "Avenir",
  },
})(Typography);

const StyledCreator = withStyles({
  root: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
})(Typography);

export default function Title() {
  const { maps, selectedMap } = useSelector((state) => state);
  const curMap = maps.find((el) => el.year === selectedMap);
  return (
    <>
      {curMap && (
        <div
          onClick={() => window.open(curMap.source, "_blank")}
          style={{
            position: "absolute",
            top: 30,
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            width: "50%",
            backgroundColor: "rgb(255, 255, 255, .7)",
            border: ".5px solid grey",
            borderRadius: "5px",
            padding: "2px",
            cursor: "pointer",
          }}
        >
          <StyledCreator>
            {curMap &&
              `${curMap.creator} (${curMap.origin && `${curMap.origin} `}${
                curMap.year
              })`}
          </StyledCreator>
          <StyledTitle>{curMap && curMap.title}</StyledTitle>
        </div>
      )}
    </>
  );
}
