const Items = require("../models/itemsSchema");
const express = require('express');
 
exports.updateitems = async (req, res) => {
    try {
        const id = req.body.id
        const availability = req.body.availability
        const updatedSlots = await Items.findByIdAndUpdate({ _id: id }, {availability:availability}).update;
        res.status(200).json({message:"successful"})
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
