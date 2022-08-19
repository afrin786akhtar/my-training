const BookModel= require("../models/MyBookModel")
const AuthorModel= require("../models/MyAuthorModel")

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

module.exports.createMyBook = createMyBook 
module.exports.createAuthor = createAuthor