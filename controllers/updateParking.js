const Parking = require("../models/ordersSchema");
const express = require('express');
 
exports.updateParking = async (req, res) => {
    try {
        const id = req.body.id
        const lati = req.body.lati;
        const longi= req.body.longi;
        const phone= req.body.phone;
        const address = req.body.address;
        const email = req.body.email;
        const updatedSlots = await Parking.findByIdAndUpdate({ _id: id }, {lati:lati, longi:longi,phone:phone,address:address,email:email});
        const final_updated = await updatedSlots.update();
        // res.status(200).json({ message: "successfully updates slots" });
        res.status(201).json(final_updated)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
