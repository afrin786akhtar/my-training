const UserModel= require("../models/userModel")

 const createUser = async function(req, res){
        let data= req.body
        let user = req.headers['isfreeappuser']
        console.log(user)  
        let x
        if(user == ''){
            x = false
        }else{
            x = user
        }

        let element = {
            name : data.name,
            balance : data.balance, 
            address : data.address,
            age : data.age,
            gender : data.gender,
            isFreeAppUser : x
        }

        let savedData= await UserModel.create(element)
        res.send({msg: savedData}) 
    }

   
module.exports.createUser= createUser

