const mongoose = require("mongoose");
const plansindividualschema = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    Gender:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    About:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Plans", plansindividualschema);