const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/ProductController")
const OrderContoller = require("../controllers/OrderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//----Product------------
router.post("/createProduct", ProductController.createProduct  )

//-------User-------------
// router.post("/createUser", UserController.createUser)

router.post("/createUser", commonMW.isFreeAppUser , UserController.createUser)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

//---------Order---------

router.post("/createOrder" ,commonMW.isFreeAppUser , OrderContoller.createOrder)

router.get("/getOrderData" , OrderContoller.getOrderData)


module.exports = router;