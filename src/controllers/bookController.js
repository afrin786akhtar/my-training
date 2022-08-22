const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().count()
    res.send({data: books})
}


const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author' , 'publisher'])
    res.send({data: specificBook})  

}

const checkForPutRequest = async function (req , res) {
    // let book = req.body
    let data = await publisherModel.find({"publisherName" : ['Penguin' , 'Harper Collins']}).select({_id : 1})
    let books = await bookModel.updateMany({ publisher : data},{$set : {isHardCover : false }})
    res.send({data : books})
}


// const updateTrue = async function (req , res){
//     let allBooks= await bookModel.find( {$or: [ { publisher: "Penguin" } , {publisher : "HarperCollins"} ] }).updateMany({isHardCover: true})
//     res.send({data: allBooks})
    
// } 

const updateForRatings = async function (req , res) {
    
    let data = await authorModel.find({rating : {$gt : 3.5 }}).select({_id : 1})
    let ratingId = await bookModel.updateMany({ author : data},{$inc : { price : 50 }})
    res.send({data : ratingId})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.checkForPutRequest = checkForPutRequest
module.exports.updateForRatings = updateForRatings
// module.exports.updateTrue = updateTrue
