"use strict";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const port = process.env.PORT || 3001;
const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
