const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    dtime:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:true
    },
    lati:{
        type:Number,
        required:true
    },
    longi:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    items:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Orders", ordersSchema);