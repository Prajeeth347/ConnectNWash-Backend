const Parking = require("../models/ordersSchema");
const express = require('express');
 
exports.updateorders = async (req, res) => {
    try {
        const id = req.body.id
        const status = req.body.status
        const updatedSlots = await Parking.findByIdAndUpdate({ _id: id }, {status:status});
        // const final_updated = await updatedSlots.update();
        res.status(201).json(updatedSlots)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
