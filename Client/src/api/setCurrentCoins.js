import axios from "axios";

export default function setCurrentCoins(user, setCoinsUserCurrentlyHas) {
  axios();
  return axios({
    method: "post",
    url: "http://localhost:3003/coins/user",
    headers: {},
    data: {
      userID: user.email || user.sub,
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
