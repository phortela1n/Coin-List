const express = require("express");
const getDB = require("../config/db");
const movements = require("../../public/mocks/db.json");

const dbRouter = express.Router();

function router() {
  const collectionName = "coins";
  dbRouter.route("/").get((req, res) => {
    (async () => {
      const db = await getDB();
      /* await db.collection(collectionName).deleteMany({}); */
      const collection = await db.collection(collectionName);
      const response = await collection.find().toArray();
      console.log(response);
      /* .insertMany(movements); */

      res.json(response);
    })();
  });
  function getCoinDetails(coin, userID) {
    switch (coin) {
      case "Bitcoin":
        return {
          userID,
          name: coin,
          description: "BTC",
          moves: [],
          img:
            "https://img2.freepng.es/20171220/bhe/bitcoin-png-5a3a2702388611.73714972151376051423153857.jpg",
        };
      case "Ethereum":
        return {
          userID,
          name: coin,
          description: "ETH",
          moves: [],
          img:
            "https://i0.pngocean.com/files/906/776/980/ethereum-blockchain-bitcoin-logo-see-you-there.jpg",
        };
      case "Litecoin":
        return {
          userID,
          name: coin,
          description: "LTC",
          moves: [],
          img:
            "https://w7.pngwing.com/pngs/777/875/png-transparent-bitcoin-computer-icons-cryptocurrency-litecoin-bitcoin-text-trademark-logo.png",
        };
      default:
        throw new Error("Coin details lookup failed");
    }
  }

  dbRouter.route("/").post((req, res) => {
    (async () => {
      const { coins, userID } = req.body;
      console.log(coins);

      const newCoins = coins.map((coin) => getCoinDetails(coin, userID));

      const db = await getDB();
      const response = await db.collection(collectionName).insertMany(newCoins);

      res.json(response);
    })();
  });
  return dbRouter;
}

module.exports = router;
