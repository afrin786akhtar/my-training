
const isFreeAppUser = function(req , res , next){
   
    // checking if isFreeAppUser present or not
    //if not present then send the msg else move to next()
    
     if( !req.headers.isfreeappuser){
        console.log("the request is missing a mandatory header")
        res.send({msg : "the request is missing a mandatory header"})
     }
     
    next()
}
   
module.exports.isFreeAppUser = isFreeAppUser
