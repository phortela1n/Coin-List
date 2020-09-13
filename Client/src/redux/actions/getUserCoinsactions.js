import axios from "axios";

export function getCoins(userID) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3003/coins/user", {
        userID,
      })
      .then(
        (response) => {
          debugger;
          console.log(response.data);
          dispatch({ type: "USER_COINS", userCoins: response.data });
        },
        (error) => console.log(error)
      );
  };
}
