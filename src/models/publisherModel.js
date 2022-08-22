const mongoose = require('mongoose');

const publisherschema = new mongoose.Schema( {
    publisherName : String , 
    headQuater : String

}, { timestamps: true });

module.exports = mongoose.model('Newpublisher', publisherschema)
