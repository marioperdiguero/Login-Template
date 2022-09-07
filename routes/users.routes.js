const userController = require('../controllers/users.controller');

const express = require("express");
const router = express.Router();

router
    .post("/register", userController.register)
    .post("/login", userController.login)
    .get("/user-profile", userController.userProfile);

module.exports = router;