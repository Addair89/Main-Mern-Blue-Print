const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensuredLoggedIn = require("../../config/ensuredLoggedIn");

// All paths start with '/api/users'

// GET /api/users/check-token
router.get("/check-token", ensuredLoggedIn, usersCtrl.checkToken);

// POST /api/users (create a user - sign up)
router.post("/", usersCtrl.create);

// POST /api/users/login
router.post("/login", usersCtrl.login);

module.exports = router;
