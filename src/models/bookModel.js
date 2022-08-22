const mongoose = require('mongoose');
const publisherModel = require('./publisherModel');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName : String ,
    author : {
        type : ObjectId ,
        ref : 'Newauthor'
    },
    isHardCover: {
        type: Boolean, 
        ref : 'Newpublisher' ,
        default : false
    } ,
    price : Number ,
    rating : Number ,
    publisher : {
        type :ObjectId , 
        ref : "Newpublisher"
    }
    
}, { timestamps: true });


module.exports = mongoose.model('Newbook', bookSchema)  