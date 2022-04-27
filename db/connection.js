const mongoose = require("mongoose");
const Keys = require("../config/Keys");

mongoose
  .connect(Keys.mongodb.dbURL)
  .then(() => {
    console.log("database connected...");
  })
  .catch((err) => {
    console.log(err);
  });
