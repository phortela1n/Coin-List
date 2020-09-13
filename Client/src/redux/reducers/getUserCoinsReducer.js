export default function getUserCoins(state = [], action) {
  switch (action.type) {
    case "USER_COINS":
      return [...state, ...action.userCoins];
    default:
      return state;
  }
}
