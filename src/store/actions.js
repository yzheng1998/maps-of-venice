export const UPDATE_MAPS = "UPDATE_MAPS";
export function updateMaps(data) {
  return { type: UPDATE_MAPS, data };
}

export const UPDATE_POPULATION = "UPDATE_POPULATION";
export function updatePopulation(data) {
  return { type: UPDATE_POPULATION, data };
}

export const UPDATE_SELECTED_MAP = "UPDATE_SELECTED_MAP";
export function updateSelectedMap(data) {
  return { type: UPDATE_SELECTED_MAP, data };
}

export const UPDATE_OPACITY = "UPDATE_OPACITY";
export function updateOpacity(data) {
  return { type: UPDATE_OPACITY, data };
}

export const TOGGLE_VISIBLE = "TOGGLE_VISIBLE";
export function toggleVisible() {
  return { type: TOGGLE_VISIBLE };
}

export const UPDATE_GEOJSON = "UPDATE_GEOJSON";
export function updateGeojson(data) {
  return { type: UPDATE_GEOJSON, data };
}

export const UPDATE_HOVERED_OBJ = "UPDATE_HOVERED_OBJ";
export function updateHoveredObj(data) {
  return { type: UPDATE_HOVERED_OBJ, data };
}

export const TOGGLE_PLAYING = "TOGGLE_PLAYING";
export function togglePlaying() {
  return { type: TOGGLE_PLAYING };
}

export const TOGGLE_CONTROLS_VISIBLE = "TOGGLE_CONTROLS_VISIBLE";
export function toggleControlsVisible() {
  return { type: TOGGLE_CONTROLS_VISIBLE };
}
