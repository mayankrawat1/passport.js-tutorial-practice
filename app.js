const express = require("express");
const path = require("path");
const Keys = require("./config/Keys");
const authRoute = require("./routes/authRoute");
const passportSetup = require("./config/passportSetup");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
const port = 3000 || process.env.PORT;

//views path
const viewPath = path.join(__dirname, "./views");

//set template engine
app.set("views", viewPath);
app.set("view engine", "ejs");

//middleware or routes handle
app.use("/auth", authRoute);
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [Keys.session.cookieKey],
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, (req, res) => {
  console.log("server listening...");
});
