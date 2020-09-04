import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOpacity } from "../../store/actions";
import Slider from "@material-ui/core/Slider";

export default function OpacitySlider() {
  const dispatch = useDispatch();
  const { opacity } = useSelector((state) => state);

  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        right: 40,
        display: "flex",
        width: 100,
        height: 30,
      }}
    >
      <Slider
        value={Math.round(opacity * 100)}
        onChange={(e, value) => dispatch(updateOpacity(value / 100))}
        getAriaValueText={(value) => value}
        valueLabelFormat={(value) => value}
        aria-labelledby="slider"
        valueLabelDisplay="auto"
        min={0}
        max={100}
        marks
      />
    </div>
  );
}
