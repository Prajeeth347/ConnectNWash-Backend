const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
   Custid:{
        type:String,
        required:true
   },
    Address: {
        type : String,
        required: true
    },
    Pincode:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Latitude:{
        type:Number,
        required:true
    },
    Longitude:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Address", addressSchema);