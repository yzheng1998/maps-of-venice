import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";

export default function getLayers({ data }) {
  const layers = [];

  for (var i in data) {
    layers.push(
      new TileLayer({
        id: i,
        data: data[i].tile,

        minZoom: 0,
        maxZoom: 19,
        tileSize: 256,
        opacity: 0.2,

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
