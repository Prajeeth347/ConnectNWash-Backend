const Tables = require("../models/tableSchema");
const express = require('express');
 
exports.creattable = async (req, res) => {
    try {
    const phone= req.body.phone;
    const email = req.body.email;
    const time = req.body.time;
    const table = req.body.table;
        const save_order = new Tables({phone:phone,email:email,time:time,table:table});
        const final_saved_order = await save_order.save();
        res.status(201).json(final_saved_order);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
