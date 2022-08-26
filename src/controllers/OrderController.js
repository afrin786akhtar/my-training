const { count } = require("console")
const { isAsyncFunction } = require("util/types")
const orderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let isFreeAppUser = req.body.isFreeAppUser
    let finalAmount = data.amount
    let finalBalance = data.balance
  
    if(!userId && !productId){
        return res.send({status: false, msg: "field is a mandatory field"})
    }else if(!userId){
        return res.send({status: false, msg: "User id is a mandatory field"})
    }else if(!productId){
        res.send({status: false, msg: "Product ID is a mandatory field"})
    }

    
    if(isFreeAppUser != "true"){
        let amt = await ProductModel.findById(productId).select({price :1 , _id: 0})
        
        productAmount= amt.price
        let userBalance = await userModel.findById(userId).select({balance :1 , _id :0})
        finalBalance = userBalance.balance

        if(userBalance >= productAmount){

            let userNewBalance = userBalance - productAmount

            let updatedData = await userModel.findByIdAndUpdate({_id : userId} , {$set : {balance: userNewBalance}})

            return res.send({data : updatedData})
        }else{
            res.send({msg : "Insufficient Balance"})
        }
    }{

        res.send({msg : "This is free PRoduct"})
    }
    
    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}   

const getOrderData = async function(req , res){
    let data = await orderModel.find().populate(['userId ,  productId'])
    res.send({data: data})
}

module.exports.createOrder = createOrder
module.exports.getOrderData = getOrderData