import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveLine } from "@nivo/line";
import Tooltip from "./tooltip";

export default function LineGraph(props) {
  const { population } = useSelector((state) => state);
  const data = [
    {
      id: "Population",
      data: population.map((point) => ({ x: point.year, y: point.population })),
    },
  ];

  return (
    <div
      style={{
        height: 150,
        marginBottom: -13,
      }}
    >
      <MyResponsiveLine data={data} />
    </div>
  );
}

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
    xScale={{ type: "linear", min: 1603, max: 1920 }}
    xFormat=".0f"
    yScale={{
      type: "linear",
      min: 90000,
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    tooltip={({ point }) => {
      const { data } = point;
      return <Tooltip {...data} />;
    }}
    yFormat=".3s"
    axisTop={null}
    enableArea
    areaBaselineValue={90000}
    areaOpacity={0.2}
    lineWidth={3}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    colors="#17bdff"
    useMesh={true}
    crosshairType="bottom"
    enablePoints={true}
    pointSize={5}
    pointBorderWidth={2}
    pointColor="#FFFFFF"
    pointBorderColor="#17bdff"
    enableGridX={false}
    enableGridY={false}
  />
);
