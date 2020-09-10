import React, { useState } from "react";
import Map from "../components/map";
import { useSelector, useDispatch } from "react-redux";
import Timeline from "../components/timeline";
import OpacitySlider from "../components/opacity-slider";
import Title from "../components/title";
import Help from "../components/help";
import {
  toggleVisible,
  togglePlaying,
  toggleControlsVisible,
} from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const { visible, controlsVisible } = useSelector((state) => state);
  const [helpVisible, setHelpVisible] = useState(true);
  // const [controlsVisibleLocal, setControlsVisibleLocal] = useState(true);

  return (
    <div
      onKeyDown={(e) => {
        if (e.nativeEvent.key === "Shift" && visible) {
          dispatch(toggleVisible());
          setHelpVisible(false);
        }
        if (e.nativeEvent.key === "Alt" && controlsVisible) {
          dispatch(toggleControlsVisible());
          // setControlsVisibleLocal(false);
        }
      }}
      onKeyUp={(e) => {
        e.nativeEvent.key === "Shift" && !visible && dispatch(toggleVisible());
        e.nativeEvent.key === "Alt" &&
          !controlsVisible &&
          dispatch(toggleControlsVisible());
      }}
      onKeyPress={(e) => {
        if (e.key === " ") {
          dispatch(togglePlaying());
        }
      }}
    >
      <Map />
      {controlsVisible && (
        <>
          <Title />
          <div
            style={{
              position: "absolute",
              top: 25,
              left: 40,
              width: "15%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Help
              visible={helpVisible}
              text="Hold shift to compare with base map"
            />
            {/* <Help
              visible={controlsVisibleLocal}
              text="Hold Alt/Option to hide details"
            /> */}
          </div>
          <Timeline />
          <OpacitySlider />
        </>
      )}
    </div>
  );
}
