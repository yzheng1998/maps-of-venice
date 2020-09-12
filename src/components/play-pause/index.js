import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrowRounded";
import PauseIcon from "@material-ui/icons/PauseRounded";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMap, togglePlaying } from "../../store/actions";

const StyledIconButton = withStyles({
  root: {
    color: "#ffffff",
    backgroundColor: "#17bdff",
    borderRadius: 5,
    width: 47,
    height: 35,
    "&:hover": {
      backgroundColor: "#3dc7ff",
    },
  },
})(IconButton);

export default function PlayPause() {
  const dispatch = useDispatch();

  const { maps, selectedMap, playing } = useSelector((state) => state);
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
    <StyledIconButton
      onClick={() => {
        dispatch(togglePlaying());
      }}
    >
      {playing ? <PauseIcon /> : <PlayArrowIcon />}
    </StyledIconButton>
  );
}
