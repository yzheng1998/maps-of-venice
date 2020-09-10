import React, { useState } from "react";
import Map from "../components/map";
import { useSelector, useDispatch } from "react-redux";
import Timeline from "../components/timeline";
import OpacitySlider from "../components/opacity-slider";
import Title from "../components/title";
import Help from "../components/help";
import { toggleVisible, togglePlaying } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state);
  const [helpVisible, setHelpVisible] = useState(true);

  return (
    <div
      onKeyDown={(e) => {
        if (e.nativeEvent.key === "Shift" && visible) {
          dispatch(toggleVisible());
          setHelpVisible(false);
        }
      }}
      onKeyUp={(e) => {
        e.nativeEvent.key === "Shift" && dispatch(toggleVisible());
      }}
      onKeyPress={(e) => {
        if (e.key === " ") {
          dispatch(togglePlaying());
        }
      }}
    >
      <Map />
      <Title />
      <Help visible={helpVisible} />
      <Timeline />
      <OpacitySlider />
    </div>
  );
}
