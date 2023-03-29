const Orders = require("../models/ordersSchema");
const express = require('express');
 
exports.createordernew = async (req, res) => {
    try {
    const lati = req.body.lati;
    const longi= req.body.longi;
    const phone= req.body.phone;
    const address = req.body.address;
    const email = req.body.email;
    const time = req.body.time;
    const items = req.body.items;
    const price = req.body.price;
    const type = req.body.type;
        const save_order = new Orders({lati:lati, longi:longi,phone:phone,address:address,email:email,time:time,items:items,price:price,type:type,status:"Order Received"});
        const final_saved_order = await save_order.save();
        res.status(201).json(final_saved_order);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
