const { count } = require("console")
const { isAsyncFunction } = require("util/types")
const orderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let finalBalance = data.balance
      
    // checking if id is present

    if(!userId && !productId){
        return res.send({status: false, msg: "field is a mandatory field"})
    }else if(!userId){
        return res.send({status: false, msg: "User id is a mandatory field"})
    }else if(!productId){
        res.send({status: false, msg: "Product ID is a mandatory field"})
    }

    // freeappuser from header

    let isFree = req.headers.isfreeappuser     // taking isFreeAppUser from header
    
    if(isFree == 'true'){
        let data = req.body  
        data["amount"] = 0
        let freeUser = await orderModel.create(data)
        console.log(freeUser)
        res.send({msg : freeUser , data : "It's Free"})

    }else if(isFree != "true" ){

        // if freeAppuser is not true i.e false   

        let amt = await ProductModel.findById(productId).select({price :1 , _id: 0})
        
        productAmount= amt.price

        let userBalance = await userModel.findById(userId).select({balance :1 , _id :0})
        
        finalBalance = userBalance.balance

        // if user balance is more than product balance

        if(finalBalance >= productAmount){

            let userNewBalance = finalBalance - productAmount

            console.log(userNewBalance)

            let updatedData = await userModel.findByIdAndUpdate({_id : userId} , {$set : {balance: userNewBalance}})

            console.log(updatedData)

            updatedData.amount = productAmount   

            updatedData.isFreeAppUser = isFree

            res.send({msg : updatedData})

        }else{   
            res.send({msg : "Insufficient Balance"})
        }
    }
    
}

const getOrderData = async function(req , res){
    let data = await orderModel.find().populate(['userId ,  productId'])
    res.send({data: data})
}

module.exports.createOrder = createOrder
module.exports.getOrderData = getOrderData   