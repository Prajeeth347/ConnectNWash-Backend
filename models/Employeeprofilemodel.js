const mongoose = require("mongoose");
const employeeProfileSchema = new mongoose.Schema({
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
        required: true
    },
    Address: {
        type : String,
        required: true
    },
    Pincode:{
        type:Number,
        required:true
    },
    PincodesService:[{
        type:Number,
        required:false
    }],
    Latitude:{
        type:Number,
        required:true
    },
    Longitude:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Services:[{
        type:String,
        required:true
    }],
    ServiceKM:{
        type:Number,
        required:true
    },
    Status:{
        type:Boolean,
        required:true
    },
    EmpType:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Employees", employeeProfileSchema);