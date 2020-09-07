import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveLine } from "@nivo/line";

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
    xFormat={".0f"}
    yScale={{
      type: "linear",
      min: 90000,
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat={".3s"}
    axisTop={null}
    enableArea
    areaBaselineValue={90000}
    lineWidth={2}
    enableSlices={"x"}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    colors={"#17bdff"}
    enablePoints={false}
    enableGridX={false}
    enableGridY={false}
    crosshairType={"bottom"}
  />
);
