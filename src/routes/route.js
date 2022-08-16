const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel")
const UserController= require("../controllers/userController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBooks" , UserController.createBooks)

router.get("/getBookData" , UserController.getBookData)

module.exports = router;