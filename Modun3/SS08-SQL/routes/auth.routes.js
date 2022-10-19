const express = require("express");
const router = express.Router();
let authController = require("../controllers/auth.controller");
let userController = require("../controllers/user.controller");

//define routes
// "/register" --> sử dụng users.controller createUser
// router.get("/register", authController.renderRegister);
// router.post("/register", userController.postUser);

// "/login" --> login Tạo controller cho auth.controller với tên là login thực hiện tìm kiếm trong db xem có user đấy không
// Nếu không trả về người dùng không tồn tại
// router.get("/login", authController.renderLogin);
router.post("/login", authController.login);
//nếu có --> check pass
//       --> Nếu đúng trả về res.json({message: "login successfully"}).
//       --> Nếu  không đúng trả về res.json({message: "wrong password"}).

module.exports = router;
