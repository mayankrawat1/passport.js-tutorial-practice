const express = require("express");
const path = require("path");
const authRoute = require("./routes/authRoute");
const app = express();
const port = 3000 || process.env.PORT;

//views path
const viewPath = path.join(__dirname, "./views");

//set template engine
app.set("views", viewPath);
app.set("view engine", "ejs");

//middleware or routes handle
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, (req, res) => {
  console.log("server listening...");
});
