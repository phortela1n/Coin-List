const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const app = express();
app.use(cors());

const PORT = 3003;

const coinRoutes = require("./src/routes/coinRoutes")();

app.use("/movements", coinRoutes);

const populateDb = require("./src/routes/dbRoutes")();

app.use("/populate", populateDb);

app.listen(PORT, () =>
  console.log(`Listening in port ${chalk.green(PORT)}...`)
);
