const express = require("express");
const getDB = require("../config/db");

const movesRouter = express.Router();

function router() {
  const collectionName = "coins";
  movesRouter.route("/").post((req, res) => {
    (async () => {
      const { selectedCrypto, moves, userID } = req.body;
      const name = selectedCrypto;
      const db = await getDB();
      const collection = await db.collection(collectionName);
      const response = await collection.updateOne(
        { userID, name },
        { $push: { moves } }
      );
      res.json(response);
    })();
  });

  movesRouter.route("/").get((req, res) => {
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

  movesRouter.route("/:movementID").delete((req, res) => {
    (async () => {
      const { userID, coinName } = req.body;
      const { movementID } = req.params;
      const db = await getDB();
      const collection = await db.collection(collectionName);
      const response = await collection.updateOne(
        { userID, name: coinName },
        { $pull: { moves: { movementID } } }
      );

      res.json(response);
    })();
  });

  return movesRouter;
}

module.exports = router;
