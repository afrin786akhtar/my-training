const BookModel= require("../models/MyBookModel")
const AuthorModel= require("../models/MyAuthorModel")
const MyBookModel = require("../models/MyBookModel")

const createMyBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let author = req.body
    let authorData= await BookModel.create(author)
    res.send({msg: authorData})
}

const findForBooks = async function (req , res) {
    let data = await AuthorModel.findOne({ author_name : "Chetan Bhagat"}).select({author_id : 1 , _id : 0})
    console.log(data)

    let list = await MyBookModel.find(data);
    res.send({ data : list})
}

const findForAuthor = async function (req , res) {
    let data = await MyBookModel.findOneAndUpdate({ name: "Third"} , {$set : { price : 600}} , {new : true})
    console.log(data)

    let author =await AuthorModel.findOne({ author_id : data.author_id}).select({ author_name : 1 , _id : 0})

    res.send({msg : data , author})
}

const findBooksBetweenPrices = async function (req , res) {
    let book = await MyBookModel.find({ price : { $gte : 50 , $lte : 100}}).select({_id :0 , author_id : 1})
    let temp = []
    for(let i=0 ; i < book.length ; i++){
        let y = book[i].author_id
        temp.push(y)
    }
    let authorName = await AuthorModel.find({ $in : temp}).select({ _id : 0 , author_name : 1 })
    res.send({msg : authorName})
}

module.exports.createMyBook = createMyBook 
module.exports.createAuthor = createAuthor
module.exports.findForBooks = findForBooks
module.exports.findForAuthor = findForAuthor
module.exports.findBooksBetweenPrices = findBooksBetweenPrices