// TODO: add and export your own actions
import flats from '../flats';

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats
  };
}

export function selectedFlat(flat) {
  return {
    type: "SET_ACTIVE_FLAT",
    payload: flat
  };
}
