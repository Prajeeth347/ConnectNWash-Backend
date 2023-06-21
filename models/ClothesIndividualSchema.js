const mongoose = require("mongoose");
const clothesindividualschema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model("Clothes", clothesindividualschema);