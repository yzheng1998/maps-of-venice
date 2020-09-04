import { UPDATE_MAPS, UPDATE_SELECTED_MAP, UPDATE_OPACITY } from "./actions";
import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAPS:
      return { ...state, maps: action.data };
    case UPDATE_SELECTED_MAP:
      return { ...state, selectedMap: action.data };
    case UPDATE_OPACITY:
      return { ...state, opacity: action.data };
    default:
      return state;
  }
}
