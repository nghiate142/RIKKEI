const express = require("express");
const router = express.Router();
// const db = require("../models/db");
let userController = require("../controllers/user.controller");

// get all
router.get("/", userController.getAll);

router.get("/:id", userController.getUser);

// create one by Id
// router.post("/", userController.postUser);

// Update one by Id
router.put("/:id", userController.updateUser);

// delete one by Id
router.delete("/:id", userController.deleteUser);

module.exports = router;
