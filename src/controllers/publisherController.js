const PublisherModel= require("../models/publisherModel")
const ObjectID = require('mongodb').ObjectId ;

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}


const getPublisherData = async function (req , res) {
    let publisher = await PublisherModel.find({ publisherName : "Harper Collins"})
    res.send({data: publisher})
}

const publisherPresent = async function (req, res) {
    let publisher = req.body
    let publisherId = publisher.publisher_Id
    if (!publisherId) {
        res.send("this detail is required")
    }
}

const publisherValid = async function(req , res) {
    if(ObjectID.isValid('62ffc55555555555555555')){
        res.send("valid detail")
    }else{
        res.send("Invalid !! Please provide correct details")
    }
}

module.exports.createPublisher= createPublisher
module.exports.getPublisherData = getPublisherData
module.exports.publisherPresent = publisherPresent
module.exports.publisherValid = publisherValid