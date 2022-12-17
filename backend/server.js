const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 2500;
const connect = require("./config/db");

app.use(express.json());
app.use(cors());

// Controllers
const DataUsageController = require("./controllers/DataUsage.controller");

app.use("/datausage/", DataUsageController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Successfully connected to port : ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
