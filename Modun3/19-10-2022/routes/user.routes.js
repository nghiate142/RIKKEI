const express = require("express");
const router = express.Router();
const usersController = require("../controller/users.controller");

// setup users route
// get all users
router.get("/", usersController.getAll);

//get user by id
router.get("/:id", usersController.getID);

// create user
router.post("/", usersController.createUser);

// update user
router.put("/:id", usersController.updateUser);

// delete user
router.delete("/:id", usersController.deleteUser);
module.exports = router;
