const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
   userId : {
    type : ObjectId,
    ref: "UserDoc"
   },
   productId :{
    type : ObjectId,
    ref : "Product"
   } ,
   amount : Number, 
   isFreeAppUser : {
    type : Boolean,
    default: true
   }
   
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
