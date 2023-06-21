const mongoose = require("mongoose");
const pincodesSchema = new mongoose.Schema({
    Pincode:{
        type:Number,
        required: true
    },
    Services:[{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model("Pincodes", pincodesSchema);