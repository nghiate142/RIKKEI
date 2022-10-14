const fs = require("node:fs");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/overview", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server listening on port http://127.0.0.1:3000");
});
