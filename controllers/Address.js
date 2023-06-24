const Addresscust = require("../models/addressmodel");
const express = require('express');
 
exports.createaddress = async (req, res) => {
    try {
    const Custid= req.body.Custid;
    const Address = req.body.Address;
    const Pincode = req.body.Pincode;
    const City = req.body.City;
    const Latitude = req.body.Latitude;
    const Longitude = req.body.Longitude
        const save_address = new Addresscust({Custid:Custid,Address:Address,Pincode:Pincode,City:City,Latitude:Latitude,Longitude:Longitude});
        const final_saved_address = await save_address.save();
        res.status(200).json(final_saved_address);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};

exports.editaddress = async (req,res) => {
    try{
        const id= req.body.id;
        const Custid= req.body.Custid;
        const Address = req.body.Address;
        const Pincode = req.body.Pincode;
        const City = req.body.City;
        const Latitude = req.body.Latitude;
        const Longitude = req.body.Longitude
        const updatedAddress = await Addresscust.findByIdAndUpdate({ _id: id }, {Custid:Custid,Address:Address,Pincode:Pincode,City:City,Latitude:Latitude,Longitude:Longitude});
        // const final_updated = await updatedAddress.update();
        res.status(201).json(updatedAddress)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getAddresses = async(req,res) => {
    try {
        const Custid = req.body.Custid
        Addresscust.find({Custid:Custid},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getAddressesbyID = async(req,res) => {
    try {
        const id = req.body.id
        Addresscust.find({_id:id},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.deleteaddress= async(req,res) => {
    try {
        const id= req.body.id;
        var deleteaddressquery = { _id: id };
        Addresscust.deleteOne(deleteaddressquery,function(err,obj){
            if (err) throw err;
            console.log("1 document deleted");
            res.status(200).json({Result:"Successfully Deleted"})
        })

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}