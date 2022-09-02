const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemeController = require("../controllers/memeController")
const WeatherController = require("../controllers/WeatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// router.get("/sessionsByDistricId" , CowinController.sessionsByDistricId)

router.get("/getDistrictSessions", CowinController.getDistrictSessions)

router.get("/meme" , MemeController.meme)

router.get("/weather" , WeatherController.weather)



module.exports = router;