const Parking = require("../models/parkingSchema");
const express = require('express');
const mongoose = require('mongoose');
exports.getparking = async (req,res)=>{
    try {
        const email = req.body.email;
        const address = await Parking.find();
        console.log(address.length)
        for (let i = 0; i < address.length; i++){
            if(address[i].email == email){
                res.status(200).json(address[i])
            }
           else{
                res.status(404).json({message:"not found"});
           }
        }
        res.status(200).json(address);
    } catch (error) {
        console.error(error);
    }
}