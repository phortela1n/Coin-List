import axios from "axios";

export function getCoins(userID) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3003/coins/user", {
        userID,
      })
      .then(
        (response) => {
          dispatch({ type: "USER_COINS", userCoins: response.data });
          return response;
        },
        (error) => console.log(error)
      );
  };
}

export function deleteCoin(userID, coinName) {
  debugger;
  return function (dispatch) {
    /*
    return axios.delete(`http://localhost:3003/coins/${coinName}`, {
      userID,
    });
     .then(
        (response) => {
          dispatch({ type: "DELETE_COIN", userCoins: response.data });
          return response;
        },
        (error) => console.log(error)
      ); */
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ userID: "pablohortelano2@gmail.com" });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3003/coins/Bitcoin", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
}
