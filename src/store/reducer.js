import {
  UPDATE_MAPS,
  UPDATE_SELECTED_MAP,
  UPDATE_OPACITY,
  UPDATE_POPULATION,
  TOGGLE_VISIBLE,
  UPDATE_GEOJSON,
  UPDATE_HOVERED_OBJ,
  TOGGLE_PLAYING,
  TOGGLE_CONTROLS_VISIBLE,
} from "./actions";
import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAPS:
      return { ...state, maps: action.data };
    case UPDATE_POPULATION:
      return { ...state, population: action.data };
    case UPDATE_SELECTED_MAP:
      return { ...state, selectedMap: action.data };
    case UPDATE_OPACITY:
      return { ...state, opacity: action.data };
    case TOGGLE_VISIBLE:
      return { ...state, visible: !state.visible };
    case UPDATE_GEOJSON:
      return { ...state, geojson: action.data };
    case UPDATE_HOVERED_OBJ:
      return { ...state, hoveredObj: action.data };
    case TOGGLE_PLAYING:
      return { ...state, playing: !state.playing };
    case TOGGLE_CONTROLS_VISIBLE:
      return { ...state, controlsVisible: !state.controlsVisible };
    default:
      return state;
  }
}
