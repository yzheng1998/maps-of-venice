import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMap } from "../../store/actions";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import LineGraph from "../line-graph";
import PlayPause from "../play-pause";

const TimelineSlider = withStyles({
  root: {
    color: "#17bdff",
    height: 4,
  },
  track: {
    height: 3,
  },
  rail: {
    height: 3,
  },
  markLabel: {
    fontSize: 14,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  mark: {
    width: 2,
    height: 7,
    marginTop: -2,
  },
})(Slider);

export default function Timeline() {
  const dispatch = useDispatch();
  const { maps, selectedMap } = useSelector((state) => state);

  const years = maps.map((map) => map.year);

  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const marks = maps.map((map, i) => ({
    value: map.year,
    label:
      i !== maps.length - 3 &&
      (i === 0 || i === maps.length - 1 || maps[i - 1].year < map.year - 7)
        ? map.year
        : "",
  }));

  return (
    <div
      style={{
        position: "absolute",
        bottom: 40,
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <PlayPause />
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
          width: "80%",
          marginRight: "5%",
        }}
      >
        <LineGraph />
        <TimelineSlider
          value={selectedMap}
          onChange={(e, value) => dispatch(updateSelectedMap(value))}
          valueLabelFormat={(value) => value}
          valueLabelDisplay="auto"
          min={minYear}
          max={maxYear}
          step={null}
          marks={marks}
          track="normal"
        />
      </div>
    </div>
  );
}
