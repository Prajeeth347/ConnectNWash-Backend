const Parking = require("../models/ordersSchema");
const express = require('express');
const mongoose = require('mongoose');
exports.getundeliveredorders = async (req,res)=>{
    try {
        const undelivered = [];
        const address = await Parking.find();
        for(let i=0;i<address.length;i++){
            if(address[i].status != "Delivered"){
                undelivered.push(address[i]);
            }
        }
                res.status(200).json(undelivered)
    } catch (error) {
        console.error(error);
    }
}