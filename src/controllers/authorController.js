const mongoose = require('mongoose');
const AuthorModel= require("../models/authorModel")
const ObjectID = require('mongodb').ObjectId ;

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

// const authorPresent = async function(req , res) {
//     let authordata = req.body 
//     let author = author.author_Id
//     if(!author){
//         res.send("This detail is required")
//     }else{
//         res.send({data : authordata})
//     }

//     // let author = await AuthorModel.findById({} , {author : req.body })
//     // res.send({data : author})
// }

const authorDetailsPresent = async function(req , res){
    if(!mongoose.isValidObjectId()){
        return res.send({status:false,msg:"pls enter vaild id"})
    }
    let author= await AuthorModel.findById()
    if(!author){
        return res.send({status:false,msg:"details not present"})
    }else{
        res.send({author})
    }
    }

const authorValid = async function(req , res) {
    if(ObjectID.isValid('888552222156532323')){
        res.send("valid detail")
    }else{
        res.send("Invalid !! Please provide correct details")
    }
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
// module.exports.authorPresent = authorPresent
module.exports.authorValid = authorValid
module.exports.authorDetailsPresent =authorDetailsPresent