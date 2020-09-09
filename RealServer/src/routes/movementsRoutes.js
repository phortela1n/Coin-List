const express = require("express");
const getDB = require("../config/db");

const coinRouter = express.Router();

function router() {
  const collectionName = "movements";

  coinRouter.route("/:coin").get((req, res) => {
    const { coin } = req.params;
    (async function doQuery() {
      const db = await getDB();
      await db
        .collection(collectionName)
        .find({ name: coin })
        .toArray((err, theArray) => {
          res.json(theArray);
        });
    })();
  });

  coinRouter.route("/").get((req, res) => {
    (async function doQuery() {
      const db = await getDB();
      await db
        .collection(collectionName)
        .find({})
        .toArray((err, theArray) => {
          res.json(theArray);
        });
    })();
  });
  return coinRouter;
}

module.exports = router;
