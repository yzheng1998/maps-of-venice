import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMap } from "../../store/actions";
import Slider from "@material-ui/core/Slider";

export default function Timeline() {
  const dispatch = useDispatch();
  const { maps } = useSelector((state) => state);

  const years = maps.map((map) => map.year);

  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const marks = maps.map((map, i) => ({
    value: map.year,
    label: map.year,
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
        width: 800,
        height: 30,
      }}
    >
      <Slider
        defaultValue={1603}
        onChange={(e, value) => dispatch(updateSelectedMap(value))}
        getAriaValueText={(value) => value}
        valueLabelFormat={(value) => value}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="auto"
        min={minYear}
        max={maxYear}
        step={null}
        marks={marks}
      />
    </div>
  );
}
