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
