const express = require("express");
const router = express.Router();

// setup users route
// get all users
router.get("/", (req, res) => {
  res.send("Welcome");
});

//get user by id
router.get("/:id", (req, res) => {
  res.send("Welcome get user by id");
});

// create user
router.post("/", (req, res) => {
  res.send("Welcome create user");
});

// update user
router.put("/:id", (req, res) => {
  res.send("Welcome update user");
});

// delete user
router.delete("/:id", (req, res) => {
  res.send("Welcome delete user");
});
module.exports = router;
