const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const ejs = require("ejs");

// import routes
const userRoutes = require("./routes/user.routes");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

// use routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log("listening on port 5000");
});
