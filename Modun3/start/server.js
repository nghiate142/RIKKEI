// 1
const fs = require("node:fs");
let result1 = fs.readFileSync("./folder-txt/read-this.txt");
// console.log(result1.toString());
let result2 = fs.readFileSync("./folder-txt/input.txt");
// console.log(result2.toString());
let result3 = fs.readFileSync("./folder-txt/append.txt");
// console.log(result3.toString());
let result4 = fs.readFileSync("./folder-txt/final.txt");

const randomstring = require("randomstring");
// fs.writeFileSync("./folder-txt/final.txt", result2 + result3)
// console.log(result4.toString());

// 2
// fs.readFile("./folder-txt/input.txt", "utf-8", (err, data) => {
//   if (err) throw err;
// console.log(data);

//   fs.readFile("./folder-txt/append.txt", "utf-8", (err, data) => {
// console.log(data);
//   });
// });

// fs.readFile("./folder-txt/append.txt", result3 + result4, (err, data) => {
// console.log(data);
// });

// 4
const http = require("node:http");
// const { url } = require("node:inspector");
const url = require("url");
const { isFunction } = require("node:util");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let searchTemplate = fs
    .readFileSync(`${__dirname}/templates/search.html`)
    .toString();
  // console.log(searchTemplate);
  let cardtemplate = fs
    .readFileSync(`${__dirname}/templates/card-template.html`)
    .toString();
  let productTemplate = fs
    .readFileSync(`${__dirname}/templates/product.html`)
    .toString();
  let updateTemplate = fs
    .readFileSync(`${__dirname}/templates/update.html`)
    .toString();

  let createTemplate = fs
    .readFileSync(`${__dirname}/templates/create.html`)
    .toString();
  let fruits = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`));
  //   console.log(req);
  let route = req.url;

  //   res.end(result4);
  if (route === "/" || route === "/overview") {
    let overviewTemplate = fs
      .readFileSync(`${__dirname}/templates/overview.html`)
      .toString();
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    // logic render data.json ra overviewTemplate

    // Map mảng fruits thành dạng HTML (card-template) đã được thay đổi
    // {{property}} thành từng property của từng object trong jruits

    fruits = fruits
      .map((e) => {
        return cardtemplate
          .replace("{{image}}", e.image)
          .replace("{{productName}}", e.productName)
          .replace("{{organic}}", e.organic === true ? "organic" : "")
          .replace("{{quantity}}", e.quantity)
          .replace("{{price}}", e.price)
          .replace("{{id}}", e.id);
      })
      .join("");

    // Gán {{cardContainer}} vào overview.html để có thể replace mảng fruits đã đc map vào {{cardContainer}}
    overviewTemplate = overviewTemplate.replace("{{carContainer}}", fruits);
    res.end(overviewTemplate);
  } else if (route.includes("/product")) {
    let routeArr = route.split("/");
    let fruitID = routeArr[2];
    if (fruitID) {
      let fruit = fruits.find((e) => e.id === Number(fruitID));
      // Thay
      productTemplate = productTemplate
        .replace("{{productName}}", fruit.productName)
        .replaceAll("{{image}}", fruit.image)
        .replace("{{from}}", fruit.from)
        .replaceAll("{{price}}", fruit.price)
        .replace("{{quantity}}", fruit.quantity)
        .replace("{{nutrients}}", fruit.nutrients)
        .replace("{{organic}}", fruit.organic)
        .replace("{{description}}", fruit.description)
        .replace("{{id}}", fruit.id);

      // console.log(fruit);
      res.end(productTemplate);
    }
  } else if (route.includes("/search")) {
    let url = require("url");
    let getUrl = url.parse(req.url, true).query.q;
    if (getUrl) {
      let fruites = fruits.find(
        (e) => e.productName == getUrl || e.id == getUrl
      );
      productTemplate = productTemplate
        .replace("{{productName}}", fruites.productName)
        .replaceAll("{{image}}", fruites.image)
        .replace("{{from}}", fruites.from)
        .replace("{{price}}", fruites.price)
        .replace("{{quantity}}", fruites.quantity)
        .replace("{{nutrients}}", fruites.nutrients)
        .replace("{{organic}}", fruites.organic)
        .replace("{{description}}", fruites.description)
        .replace("{{id}}", fruites.id);
      res.writeHead(302, {
        Location: `http://127.0.0.1:3000/product/${fruits.id}`,
      });
      res.end(productTemplate);
    } else {
      res.end(searchTemplate);
    }
  } else if (route.includes("/create")) {
    let data = "";
    let messager = "🥦 Add more fruit 🌽";
    if (req.method == "POST") {
      req
        .on("error", (err) => {
          console.error(err);
        })
        .on("data", (chunk) => {
          data += chunk.toString();
        })
        .on("end", () => {
          console.log(data);
          let queryString = url.parse(`${route}?${data}`, true).query;
          console.log(queryString);
          let newFruit = {
            ...queryString,
            id: randomstring.generate(9),
            organic: this.organic === "on" ? true : false,
          };
          console.log(newFruit);
          fruits.push(newFruit);
          fs.writeFileSync(
            `${__dirname}/dev-data/data.json`,
            JSON.stringify(fruits)
          );
        });
    }
    res.end(createTemplate.replace(/{{Messeger}}/gi, messager));
  } else if (req.url.includes("/delete")) {
    let routeArr = route.split("/");
    let deleteID = routeArr[2];
    console.log(deleteID);
    fruits = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`));
    let findIndex = fruits.findIndex((e) => e.id === Number(deleteID));
    fruits.splice(findIndex, 1);
    fs.writeFileSync(`${__dirname}/dev-data/data.json`, JSON.stringify(fruits));
    res.writeHead(302, { location: "/overview" });
    res.end();
  } else if (route.includes("/update")) {
    res.end(updateTemplate);
  } else {
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
