import React, { useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import layers from "./layers";
import { db } from "../../firebase";

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

  useEffect(() => {
    db.collection("maps")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        //   this.setState({ users: data });
      });
  });

  return (
    <div>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
    </div>
  );
}
