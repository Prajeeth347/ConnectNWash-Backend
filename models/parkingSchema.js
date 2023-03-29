const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema({
    lati:{
        type:Number,
        required: true
    },
    longi:{
        type:Number,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("addresses", parkingSchema);