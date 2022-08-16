const bookModel = require("../models/bookModel")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBooks= async function(req , res){
    let book = req.body
    let availableBook = await bookModel.create(book)
    res.send({msg : availableBook})
}

const getBookData = async function(req , res){
    
    let allBooks = await bookModel.find()
    res.send({msg : allBooks})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData

module.exports.createBooks = createBooks
module.exports.getBookData = getBookData