import axios from "axios";

export default function setCurrentCoins(setCoinsUserCurrentlyHas, user) {
  return axios({
    method: "post",
    url: "http://localhost:3003/coins/user",
    headers: {},
    data: {
      userID: user,
    },
  })
    .then(function ({ data }) {
      const coinNames = data.map((coin) => coin.name);
      const coinsNamesAsSet = new Set(coinNames);
      setCoinsUserCurrentlyHas(coinsNamesAsSet);
    })
    .catch(function (error) {
      console.log(error);
    });
}
