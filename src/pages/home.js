import React from "react";
import Map from "../components/map";
import Timeline from "../components/timeline";
import OpacitySlider from "../components/opacity-slider";

export default function Home() {
  return (
    <div>
      <Map />
      <Timeline />
      <OpacitySlider />
    </div>
  );
}
