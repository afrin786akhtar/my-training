const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName : String ,
    age : Number ,
    address : String , 
    rating : Number

}, { timestamps: true });
//created time & updated time

module.exports = mongoose.model('Newauthor', authorSchema)
