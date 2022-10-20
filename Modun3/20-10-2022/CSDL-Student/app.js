const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const morgan = require("morgan");
const ejs = require("ejs");
const bodyParser = require("body-parser");

// Import routes

let studentRoutes = require("./routes/student.routes");
// let subjectRoutes = require("./routes/subject.route");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home page" });
});

//use routes
app.use("/list", studentRoutes);
// app.use("/time", subjectRoutes);

app.listen(port, (req, res) => {
  console.log("listening on port 5000");
});
