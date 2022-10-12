const bodyParser = require("body-parser");
const fs = require("node:fs");
const express = require("express");
const { request } = require("node:http");
const { nextTick } = require("node:process");
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>This is home page</h1>");
});
app.get("/overview", (req, res) => {
  res.send("<h1>This is overview page</h1>");
});
app.get("/product", (req, res) => {
  res.send("<h1>This is product page</h1>");
});
// app.get("/api/v1/users", (req, res) => {
//   fs.readFile("./data/users.json", "utf-8", (err, data) => {
//     if (err) {
//       console.log("false", err);
//       return;
//     }
//     // console.log("file data:", data);
//     res.send(JSON.parse(data));
//   });
// });
app.get("/api/v1/users/:id", (req, res) => {
  let idData = req.params.id;
  fs.readFile("./data/users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("false", err);
      return;
    }
    let datas = JSON.parse(data);
    let dataID = datas.find((e) => e._id === idData);
    res.send(dataID);
  });
});
app.post("/api/v1/users", getReqBody, (req, res, next) => {
  console.log(req.body);
  res.send();
});
app.post("/api/v1/users", (req, res) => {
  let emailData = req.body.email;
  fs.readFile(`${__dirname}/data/users.json`, (err, data) => {
    let datas = JSON.parse(data);
    // res.send(datas);
    let dataE = datas.find((e) => e.email === emailData);
    // res.send(dataE);
    if (!emailData) {
      datas.push(dataE);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
