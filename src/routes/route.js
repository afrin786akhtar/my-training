const express = require('express');
const router = express.Router();
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

router.post("/createUser", commonMW.isFreeAppUser , UserController.createUser)

//---------Order---------

router.post("/createOrder" ,commonMW.isFreeAppUser , OrderContoller.createOrder)

router.get("/getOrderData" ,OrderContoller.getOrderData)  


module.exports = router;