const Items = require("../models/itemsSchema");
const express = require('express');
const mongoose = require('mongoose');
exports.getitems = async (req,res)=>{
    try {
        const address = await Items.find();
                res.status(200).json(address)
    } catch (error) {
        console.error(error);
    }
}