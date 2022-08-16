const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : String, 
    authorName : String ,
    category : {
        type :String ,
        enum :[  "horror", "fantasy", "graphic novel"]
     },
    year : Number
}, { timestamps: true })

module.exports = mongoose.model('Books' , bookSchema)