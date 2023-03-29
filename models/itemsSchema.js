const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    availability:{
        type:Number,
        required:true
    },
    vegitarian:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Items", itemsSchema);