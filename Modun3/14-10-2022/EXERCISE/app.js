const express = require("express");
const app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
let morgan = require("morgan");
let ejs = require("ejs");
const port = 3000;
// let userRoutes = require("./routes/users.route");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(port, function () {
  console.log("Your app running on port " + port);
});
