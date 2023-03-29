const Items = require("../models/itemsSchema");
const express = require('express');
 
exports.createitems = async (req, res) => {
    try {
    const name= req.body.name;
    const price = req.body.price;
    const availability = req.body.availability;
    const vegitarian = req.body.vegitarian;
    const type = req.body.type;
        const save_order = new Items({name:name,price:price,availability:availability,type:type,vegitarian:vegitarian});
        const final_saved_order = await save_order.save();
        res.status(201).json(final_saved_order);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
