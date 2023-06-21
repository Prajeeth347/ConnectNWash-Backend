const mongoose = require("mongoose");
const customerProfileSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    Gender:{
        type:Number,
        required:true
    },
    Mobile:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:false
    },
    DOB:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Customers", customerProfileSchema);