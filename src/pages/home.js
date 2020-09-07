import React from "react";
import Map from "../components/map";
import Timeline from "../components/timeline";
import OpacitySlider from "../components/opacity-slider";
import Title from "../components/title";

export default function Home() {
  return (
    <div>
      <Map />
      <Title />
      <Timeline />
      <OpacitySlider />
    </div>
  );
}
