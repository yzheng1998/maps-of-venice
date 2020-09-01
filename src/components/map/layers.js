import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";

const linkArr = [
  "https://maps.georeferencer.com/georeferences/2defe980-ce12-485c-9ef3-3e9702dd8a3d/2020-08-27T01:14:19.494208Z/map/{z}/{x}/{y}.png?key=QU6mpkMUDAebMq43wcCf",
  "https://maps.georeferencer.com/georeferences/9d5cf304-8e60-4b62-91fa-a0099c103860/2020-08-27T19:05:43.782929Z/map/{z}/{x}/{y}.png?key=QU6mpkMUDAebMq43wcCf",
  "https://maps.georeferencer.com/georeferences/d06c1d9d-8e27-4470-871e-043dab785815/2020-08-27T10:59:16.186384Z/map/{z}/{x}/{y}.png?key=QU6mpkMUDAebMq43wcCf",
  "https://maps.georeferencer.com/georeferences/5f489a7b-9b46-47cc-a5ab-79d7ba7dc8f9/2020-08-27T11:06:14.452110Z/map/{z}/{x}/{y}.png?key=QU6mpkMUDAebMq43wcCf",
  "https://maps.georeferencer.com/georeferences/bdce72bf-666a-459a-9bd6-59638712425c/2020-08-27T11:10:06.141598Z/map/{z}/{x}/{y}.png?key=QU6mpkMUDAebMq43wcCf",
];

const layers = [];

// for (var i in linkArr) {
//   layers.push(
//     new TileLayer({
//       id: i,
//       data: linkArr[i],

//       minZoom: 0,
//       maxZoom: 19,
//       tileSize: 256,
//       opacity: 0.2,

//       renderSubLayers: (props) => {
//         const {
//           bbox: { west, south, east, north },
//         } = props.tile;

//         return new BitmapLayer(props, {
//           data: null,
//           image: props.data,
//           bounds: [west, south, east, north],
//         });
//       },
//     })
//   );
// }

export default layers;
