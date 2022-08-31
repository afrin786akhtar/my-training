const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }




const createUser= async function (req, res) {

  try{
    let data= req.body
    console.log(data)
    let savedData= await UserModel.create(data)
    res.status(201).send({msg: savedData})
    
  }catch(err){
    console.log("This is an Error : " , err.message)
    res.status(500).send({msg : "SERVER ERROR" , error : err.message})
  }
    
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode