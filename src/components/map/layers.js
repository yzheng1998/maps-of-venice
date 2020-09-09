import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer, GeoJsonLayer } from "@deck.gl/layers";

export default function getLayers({
  data,
  currentYear,
  opacity,
  visible,
  geojson,
  onHover,
}) {
  const layers = [];

  for (var i in data) {
    const prevUrl = data[i].tile;
    const urls = [0, 1, 2, 3].map((j) => {
      return prevUrl.replace(
        "https://maps.georeferencer.com/georeferences/",
        `https://maps-${j}.georeferencer.com//georeferences/`
      );
    });

    layers.push(
      new TileLayer({
        id: i,
        data: urls,
        visible: visible && data[i].year === currentYear,

        minZoom: 0,
        maxZoom: 19,
        tileSize: 256,
        opacity,

        renderSubLayers: (props) => {
          const {
            bbox: { west, south, east, north },
          } = props.tile;

          return new BitmapLayer(props, {
            data: null,
            image: props.data,
            bounds: [west, south, east, north],
          });
        },
      })
    );
  }

  Object.keys(geojson).length > 0 &&
    layers.push(
      new GeoJsonLayer({
        id: "geojson",
        data: geojson,
        pickable: true,
        getFillColor: (d) =>
          d.properties.year <= currentYear ? [255, 255, 0, 50] : [0, 0, 0, 0],
        getLineColor: [255, 255, 0, 100],
        getLineWidth: (d) => (d.properties.year <= currentYear ? 2 : 0),
        lineWidthUnits: "pixels",
        onHover,
        updateTriggers: {
          getLineWidth: currentYear,
          getFillColor: currentYear,
        },
      })
    );

  return layers;
}
