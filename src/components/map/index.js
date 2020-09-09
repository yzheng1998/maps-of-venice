import React from "react";
import DeckGL from "@deck.gl/react";
import { useSelector } from "react-redux";
import { StaticMap } from "react-map-gl";
import Api from "./api";
import getLayers from "./layers";
import { MAPBOX_TOKEN, VENICE_VIEW_STATE } from "./config";

export default function Map() {
  const { maps, selectedMap, opacity, visible } = useSelector((state) => state);

  const _getLayers = () => {
    return getLayers({ data: maps, filter: selectedMap, opacity, visible });
  };

  return (
    <div>
      <DeckGL
        initialViewState={VENICE_VIEW_STATE}
        controller={{
          dragRotate: false,
        }}
        layers={_getLayers()}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
      <Api />
    </div>
  );
}
