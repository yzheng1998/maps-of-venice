import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMap } from "../../store/actions";

export default function PlayPause() {
  const dispatch = useDispatch();

  const [playing, setPlaying] = useState(false);

  const { maps, selectedMap } = useSelector((state) => state);
  const years = maps.map((x) => x.year);

  useEffect(() => {
    const index = years.findIndex((year) => year === selectedMap);
    if (playing) {
      const timeout = setTimeout(
        () => dispatch(updateSelectedMap(years[(index + 1) % years.length])),
        500
      );
      return () => clearTimeout(timeout);
    }
  }, [playing, selectedMap, dispatch, years]);

  return (
    <div style={{ alignSelf: "flex-end" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "Pause" : "Play"}
      </Button>
    </div>
  );
}
