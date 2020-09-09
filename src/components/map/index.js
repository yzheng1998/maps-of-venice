import React from "react";
import DeckGL from "@deck.gl/react";
import { useSelector, useDispatch } from "react-redux";
import { updateHoveredObj } from "../../store/actions";
import { StaticMap } from "react-map-gl";
import Api from "./api";
import getLayers from "./layers";
import { MAPBOX_TOKEN, VENICE_VIEW_STATE } from "./config";
import Tooltip from "../tooltip";

export default function Map() {
  const dispatch = useDispatch();
  const { maps, selectedMap, opacity, visible, geojson } = useSelector(
    (state) => state
  );

  const onHover = (info) => {
    const { x, y, object } = info;
    if (!object || object.properties.year <= selectedMap) {
      dispatch(
        updateHoveredObj({
          x,
          y,
          obj: object,
        })
      );
    }
  };

  const _getLayers = () => {
    return getLayers({
      data: maps,
      currentYear: selectedMap,
      opacity,
      visible,
      geojson,
      onHover,
    });
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
        <Tooltip />
      </DeckGL>
      <Api />
    </div>
  );
}
