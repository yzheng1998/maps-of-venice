import React, { useState } from "react";
import Map from "../components/map";
import { useDispatch } from "react-redux";
import Timeline from "../components/timeline";
import OpacitySlider from "../components/opacity-slider";
import Title from "../components/title";
import Help from "../components/help";
import { toggleVisible } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const [helpVisible, setHelpVisible] = useState(true);

  return (
    <div
      onKeyDown={(e) => {
        if (e.shiftKey) {
          dispatch(toggleVisible());
          setHelpVisible(false);
        }
      }}
      onKeyUp={(e) => {
        e.nativeEvent.key === "Shift" && dispatch(toggleVisible());
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
