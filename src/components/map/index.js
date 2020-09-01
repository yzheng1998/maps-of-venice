import React from "react";
import DeckGL from "@deck.gl/react";
import { useSelector } from "react-redux";
import { StaticMap } from "react-map-gl";
import Api from "./api";
import getLayers from "./layers";

export default function Map() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  const INITIAL_VIEW_STATE = {
    latitude: 45.437545,
    longitude: 12.333794,
    zoom: 13,
    minZoom: 10,
    pitch: 0,
    bearing: 0,
  };

  const { maps } = useSelector((state) => state);

  const _getLayers = () => {
    return getLayers({ data: maps });
  };

  return (
    <div>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={_getLayers()}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
      <Api />
    </div>
  );
}
