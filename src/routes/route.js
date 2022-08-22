const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// bookController

router.post("/createBook" , bookController.createBook)

router.get("/getBooksData" , bookController.getBooksData)

router.get("/getBooksWithAuthorAndPublisherDetails" , bookController.getBooksWithAuthorAndPublisherDetails)

router.put("/checkForPutRequest" , bookController.checkForPutRequest)

router.put("/updateForRatings" , bookController.updateForRatings)


// authorController

router.post("/createAuthor" , authorController.createAuthor)

router.get("/getAuthorsData" , authorController.getAuthorsData)

// router.post("/authorPresent" , authorController.authorPresent)

router.get("/authorValid" , authorController.authorValid)

router.get("/authorDetailsPresent" , authorController.authorDetailsPresent)


// publisherController

router.post("/createPublisher" , publisherController.createPublisher)

router.get("/getPublisherData" , publisherController.getPublisherData)

router.post("/publisherPresent" , publisherController.publisherPresent) 

router.get("/publisherValid" , publisherController.publisherValid)

module.exports = router;