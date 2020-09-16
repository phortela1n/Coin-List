const express = require("express");
const getDB = require("../config/db");
const getCoinDetails = require("../../public/api/getCoinDetails");

const dbRouter = express.Router();

function router() {
  const collectionName = "coins";
  dbRouter.route("/").get((req, res) => {
    (async () => {
      const db = await getDB();
      const collection = await db.collection(collectionName);
      const response = await collection.find().toArray();
      res.json(response);
    })();
  });

  dbRouter.route("/:coinName").delete((req, res) => {
    (async () => {
      const { userID } = req.body;
      const { coinName } = req.params;
      const db = await getDB();
      const collection = await db.collection(collectionName);
      const response = await collection.deleteOne({ userID, name: coinName });

      res.json(response);
      // 1. delete from coins collection, for that user and coin combination
      // 2. return {}
    })();
  });

  //    Get all coins from one user

  dbRouter.route("/user").post((req, res) => {
    (async () => {
      const { userID } = req.body;
      const db = await getDB();
      const collection = await db.collection(collectionName);
      const response = await collection.find({ userID }).toArray();
      /*         .insertOne(moves); */
      res.json(response);
    })();
  });

  //  Find only one coin for a user

  dbRouter.route("/").post((req, res) => {
    (async () => {
      const { coins, userID } = req.body;
      const newCoins = coins.map((coin) => getCoinDetails(coin, userID));
      const db = await getDB();
      const response = await db.collection(collectionName).insertMany(newCoins);
      res.json(response);
    })();
  });
  return dbRouter;
}

module.exports = router;
