const express = require("express");
const getDB = require("../config/db");
const movements = require("../../public/mocks/db.json");
const getCoinDetails = require("../../public/api/getCoinDetails");

const dbRouter = express.Router();

function router() {
  const collectionName = "coins";
  dbRouter.route("/").get((req, res) => {
    (async () => {
      const db = await getDB();
      const collection = await db.collection(collectionName);
      const response = await collection.find().toArray();
      console.log(response);
      res.json(response);
    })();
  });

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
