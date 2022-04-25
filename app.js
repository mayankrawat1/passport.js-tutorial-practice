const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, (req, res) => {
  console.log("server listening...");
});
