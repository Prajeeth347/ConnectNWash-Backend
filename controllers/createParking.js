const Parking = require("../models/parkingSchema");
const express = require('express');
 
exports.createorder = async (req, res) => {
    try {
    const lati = req.body.lati;
    const longi= req.body.longi;
    const phone= req.body.phone;
    const address = req.body.address;
    const email = req.body.email;
        const save_address = new Parking({lati:lati, longi:longi,phone:phone,address:address,email:email});
        const final_saved_address = await save_address.save();
        res.status(201).json(final_saved_address);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
