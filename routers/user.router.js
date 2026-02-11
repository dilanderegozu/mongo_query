const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/register", controller.register);

module.exports = {
    user:router
};