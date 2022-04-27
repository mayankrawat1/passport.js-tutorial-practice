const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  googleid: String,
});

const UserModel = new mongoose.model("UserModel", userSchema);

module.exports = UserModel;
