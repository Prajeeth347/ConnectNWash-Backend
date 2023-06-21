const Pincodes = require("../models/Pincodesmodel");
const express = require('express');
 
exports.createpincode = async (req, res) => {
    try {
    const Pincode= req.body.Pincode;
    const Services = req.body.Services
    const save_pincode = new Pincodes({Pincode:Pincode,Services: Services});
    const final_saved_pincode = await save_pincode.save();
    res.status(200).json(final_saved_pincode);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};

exports.checkServiceable = async(req,res) => {
    try {
        const Pincode = req.body.Pincode
        Pincodes.find({Pincode:Pincode},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.deletepincode = async(req,res) => {
    try {
        const pincode= req.body.Pincode;
        var deletepincodequery = { "Pincode": pincode };
        Pincodes.deleteOne(deletepincodequery,function(err,obj){
            if (err) throw err;
            console.log("1 document deleted");
            res.status(200).json({Result:"Successfully Deleted"})
        })

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}