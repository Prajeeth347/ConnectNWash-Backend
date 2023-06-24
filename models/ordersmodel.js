const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
    addressid:{
        type:String,
        required: true
    },
    custid:{
        type:String,
        required:true
    },
    empid:{
        type:String,
        required:true
    },
    items:[{
        type: String,
        required: true
    }],
    status:{
        type:Number,
        required: true
    },
    datetime:{
        type:Date,
        required:true
    }
    ,
    totalcost:{
        type:Number,
        required:true
    },
    rejected:[{
        type:String,
        required: false,
        default:[]
    }]
})

module.exports = mongoose.model("Orders", ordersSchema);