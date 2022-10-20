const express = require("express");
const router = express.Router();
const db = require("../models/db");
let studentController = require("../controller/student.controller");

router.get("/", studentController.getAll);
router.get("/");
// router.get("/student", (req, res) => {});
module.exports = router;
