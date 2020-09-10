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
  markLabel: {
    fontSize: 14,
    fontFamily: "Avenir",
  },
  mark: {
    width: 2,
    height: 5,
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
        bottom: 200,
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: 30,
      }}
    >
      <PlayPause />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          height: 30,
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
