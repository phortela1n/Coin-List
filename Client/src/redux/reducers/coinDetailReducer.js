export default function coinDetailReducer(state = [], action) {
  switch (action.type) {
    case "GET_MOVEMENTS":
      return [...state, ...action.movements];
    case "INCREMENT":
      return [...state, ...action.newCoins];
    default:
      return state;
  }
}
