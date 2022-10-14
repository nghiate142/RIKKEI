const express = require("express");
const app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
let morgan = require("morgan");
let ejs = require("ejs");
const port = 3000;
let userRoutes = require("./routes/users.route");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

// Setup routes
app.get("/", (req, res) => {
  res.send("home page");
});
// setup user routes
app.use("/users", userRoutes);

app.get("/", function (req, res) {
  console.log("Hello, world!");
  res.render("index", {
    name: "Phú massage",
    age: 25,
    job: "Checker",
    student: "alo alo",
    hobbies: ["checker", "met long", "chơi", "Mlem"],
    lovers: {
      person1: "person1",
      person2: "person2",
      person3: "person3",
    },
    title: "this is index page",
  });
});

app.listen(port, function () {
  console.log("Your app running on port " + port);
});

// EJS (Embedded Javascript)
// ---> Nhúng những code JS vào HTML để tạo ra một dạng template
