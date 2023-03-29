const Parking = require("../models/ordersSchema");
const express = require('express');
const mongoose = require('mongoose');
exports.getorders = async (req,res)=>{
    try {
        const address = await Parking.find();
                res.status(200).json(address)
    } catch (error) {
        console.error(error);
    }
}