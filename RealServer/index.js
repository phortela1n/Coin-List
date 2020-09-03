const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 3003;

const coinRoutes = require("./src/routes/coinRoutes")();

app.use("/movements", coinRoutes);

const populateDb = require("./src/routes/dbRoutes")();

app.use("/populate", populateDb);

app.listen(PORT, () =>
  console.log(`Listening in port ${chalk.green(PORT)}...`)
);
