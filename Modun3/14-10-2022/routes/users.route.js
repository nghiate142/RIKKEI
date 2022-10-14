let express = require("express");
let router = express.Router();

router.get("", (req, res) => {
  res.send("user page");
});
router.get("/:id", (req, res) => {
  res.send("user detail page");
});
router.post("/:id", (req, res) => {
  res.send("add successfully");
});
router.put("/:id", (req, res) => {
  res.send("update successfully");
});
router.delete("/:id", (req, res) => {
  res.send("delete successfully");
});

module.exports = router;
