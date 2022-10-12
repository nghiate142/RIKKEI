const express = require("express");
const fs = require("node:fs");
let bodyParser = require("body-parser");
const { request } = require("node:http");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("This is homepage  ");
});
app.get("/ask", (req, res) => {
  res.send("This is asking page");
});
app.get("/question-detail/:id", (req, res) => {
  res.send("This is a question detail page");
});
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});
//
app.get("/api/v1/questions", (req, res) => {
  fs.readFile(`${__dirname}/dev-data/questions.json`, (err, data) => {
    let dataFile = JSON.parse(data);
    let dataUse = JSON.stringify(dataFile);
    console.log(dataFile);
    res.status(200).json(dataUse);
  });
});
app.get("/api/v1/questions/:id", (req, res) => {
  let params = req.params.id;
  console.log(params);
  fs.readFile(`${__dirname}/dev-data/questions.json`, (err, data) => {
    if (err) {
      console.log("error", err);
      return;
    }
    let datas = JSON.parse(data);
    // console.log(datas);
    let idData = datas.find((e) => e.id == params);
    // console.log(idData);
    res.status(200).json(idData);
  });
});

app.post("/api/v1/questions", (req, res) => {
  let post = req.body;
  let dataContent = req.body.content;
  //   console.log(post);
  fs.readFile(`${__dirname}/dev-data/questions.json`, (err, data) => {
    let fileData = JSON.parse(data);
    // console.log(fileData);
    let nameData = fileData.find((e) => e.content === dataContent);
    if (!nameData) {
      fileData.push(post);
      fs.writeFile(
        `${__dirname}/dev-data/questions.json`,
        JSON.stringify(fileData),
        (err) => {
          if (err) {
            console.log("error", err);
            return;
          } else {
            res.status(200).json({ message: "Create successfully" });
          }
        }
      );
    } else {
      res.status(200).json({ message: "Question already exists" });
    }
  });
});

app.put("/api/v1/questions/:id", (req, res) => {
  let put = req.body;
  let dataParams = req.params.id;
  console.log(dataParams);
  fs.readFile(`${__dirname}/dev-data/questions.json`, (err, data) => {
    let fileData = JSON.parse(data);
    // console.log(fileData);
    let idData = fileData.find((e) => e.id == dataParams);
    console.log(idData);
    if (idData) {
      let newQuestion = {
        ...req.body,
        dislike: Number(req.body.dislike),
        like: Number(req.body.like),
        id: Number(req.body.id),
      };
      fileData.push(newQuestion);
      fs.writeFile(
        `${__dirname}/dev-data/questions.json`,
        JSON.stringify(fileData),
        (err) => {
          if (err) {
            console.log("error", err);
            return;
          } else {
            res.status(200).json({ message: "Update successfully" });
          }
        }
      );
    } else {
      res.status(200).json({ message: "Question not found" });
    }
  });
});

app.delete("/api/v1/questions/:id", (req, res) => {
  let dataDel = req.params.id;
  //   console.log(dataDel);
  fs.readFile(`${__dirname}/dev-data/questions.json`, (err, data) => {
    let fileData = JSON.parse(data);
    // console.log(fileData);
    const deleted = fileData.find((e) => e.id == dataDel);
    // console.log(idData);
    if (deleted) {
      let index = fileData.indexOf(deleted);
      fileData[index] = fileData;
      console.log(fileData[index]);
      fileData.splice(index, 1);
      fs.writeFile(
        `${__dirname}/dev-data/questions.json`,
        JSON.stringify(fileData),
        (err) => {
          if (err) throw err;

          res.status(200).json({ message: "Question success" });
        }
      );
      //   res.send(fileData.splice(deleted, 1));
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
app.get("/ask", (req, res) => {
  res.sendFile(`${__dirname}/public/ask.html`);
});
app.get("/question-detail/:id", (req, res) => {
  res.sendFile(`${__dirname}/public/question-detail.html`);
});
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
