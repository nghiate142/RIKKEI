const fs = require("node:fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { log } = require("node:console");
const { request } = require("node:http");
const cors = require("cors"); // npm i cors
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 3 middlewares
// 3
const checkExit = (req, res, next) => {
  let id = req.params.id;
  let title = req.body.title;
  if (!id) {
    res.status(404).json({ message: "Id not found" });
  } else {
    fs.readFile(
      `${__dirname}/ask-community-project/dev-data/todos.json`,
      (err, data) => {
        if (err) {
          request.status(500).json({ message: err.message });
        } else {
          let todos = JSON.parse(data);
          let todo = todos.find((e) => e.id === number(id));
          if (todo) {
            next();
          } else {
            res.status(200).json({ message: "Todo not exist" });
          }
        }
      }
    );
  }
};

// 4
app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

// 1
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//2.1
app.get("/api/v1/todos/", (req, res) => {
  let perPage = Number(req.query.per_page);
  fs.readFile(
    `${__dirname}/ask-community-project/dev-data/todos.json`,
    (err, data) => {
      let datas = JSON.parse(data);
      // res.send(datas);
      if (perPage) {
        let newResult = datas.splice(0, perPage);
        res.status(200).json({ datas: newResult });
      } else {
        res.status(200).json(datas);
      }
    }
  );
});

//2.2
app.get("/api/v1/todos/:id", checkExit, (req, res) => {
  let id = req.params.id;
  fs.readFile(
    `${__dirname}/ask-community-project/dev-data/todos.json`,
    (err, data) => {
      let datas = JSON.parse(data);
      let idData = datas.find((e) => e.id == id);
      if (idData) {
        res.status(200).json(idData);
      }
    }
  );
});

//2.3
app.post("/api/v1/todos", (req, res) => {
  let title1 = req.body;
  //   console.log(title1);
  fs.readFile(
    `${__dirname}/ask-community-project/dev-data/todos.json`,
    (err, data) => {
      let datas = JSON.parse(data);
      //   console.log(datas);
      let titleData = datas.find((e) => e.title == title1.title);
      //   console.log(titleData);
      if (!titleData) {
        let newTodo = {
          ...req.body,
          userID: Number(req.body.userID),
          id: titleData.length + 1,
          completed: Boolean(this.completed),
        };
        datas.push(newTodo);
        fs.writeFile(
          `${__dirname}/ask-community-project/dev-data/todos.json`,
          JSON.stringify(datas),
          (err) => {
            if (err) {
              res.send(err);
            } else {
              res.status(201).json({ message: "Create successfully" });
            }
          }
        );
      } else {
        res.status(200).json({ message: "Todo already exists" });
      }
    }
  );
});

// 2.4
app.put("/api/v1/todos/:id", (req, res) => {
  let id = req.params.id;
  //   console.log(id);
  let body = req.body;
  //   console.log(body);
  fs.readFile(
    `${__dirname}/ask-community-project/dev-data/todos.json`,
    (err, data) => {
      let datas = JSON.parse(data);
      let idData = datas.find((e) => e.id == body.id);
      // if (idData) {
      let dataId = datas.indexOf(idData);
      datas[dataId] = body;
      fs.writeFile(
        `${__dirname}/ask-community-project/dev-data/todos.json`,
        JSON.stringify(datas),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({ message: "Update successfully" });
          }
        }
      );
      // } else {
      // res.status(500).json({ message: "Todo not found" });
      // }
    }
  );
});

// 2.5
app.delete(`/api/v1/todos/:id`, (req, res) => {
  let id = req.params.id;
  //   console.log(id);

  fs.readFile(
    `${__dirname}/ask-community-project/dev-data/todos.json`,
    (err, data) => {
      let datas = JSON.parse(data);
      let idData = datas.find((e) => e.id == id);
      if (!idData) {
        res.status(500).json({ message: "Todo not found" });
      } else {
        let dataId = datas.indexOf(idData);
        // console.log(dataId);
        datas.splice(dataId, 1);
        fs.writeFile(
          `${__dirname}/ask-community-project/dev-data/todos.json`,
          JSON.stringify(datas),
          (err) => {
            if (err) {
              //   console.log(err);
            } else {
              res.status(200).json({ message: "Delete successfully" });
            }
          }
        );
      }
    }
  );
});

app.listen(3000, () => {
  console.log("server listening on port http://127.0.0.1:3000");
});
