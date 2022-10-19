const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
const { request } = require("http");
const port = 3000;

//import routes
// let userRoutes = require("./routes/user.routes");
let userRoutes = require("./routes/user.routes");
let authRoutes = require("./routes/auth.routes");
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

//user routes
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, (req, res) => {
  console.log("server listening on port");
});
