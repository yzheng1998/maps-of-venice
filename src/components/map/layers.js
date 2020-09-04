import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";

export default function getLayers({ data, filter, opacity }) {
  const layers = [];

  for (var i in data) {
    layers.push(
      new TileLayer({
        id: i,
        data: data[i].tile,
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
