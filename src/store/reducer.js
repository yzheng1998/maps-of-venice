import { UPDATE_MAPS } from "./actions";
import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAPS:
      return { ...state, maps: action.data };
    default:
      return state;
  }
}
