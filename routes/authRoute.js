const router = require("express").Router();
const passport = require("passport");

//database connection
require("../db/connection");

//userModel
const UserModel = require("../model/userModel");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.send("logout");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("you reached the callback URI");
});

module.exports = router;
