import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";

export default function getLayers({ data, filter, opacity }) {
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
        visible: data[i].year === filter,

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

  return layers;
}
