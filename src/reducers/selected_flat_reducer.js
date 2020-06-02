export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_ACTIVE_FLAT":
      return action.payload;
    default:
      return state;
  }
}
