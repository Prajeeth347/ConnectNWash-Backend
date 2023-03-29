const mongoose = require("mongoose");
const TableSchema = new mongoose.Schema({
    phone:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    table:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Tables", TableSchema);