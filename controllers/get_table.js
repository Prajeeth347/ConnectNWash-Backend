const Table = require("../models/tableSchema");
const express = require('express');
const mongoose = require('mongoose');
exports.getTables = async (req,res)=>{
    try {
        const address = await Table.find();
                res.status(200).json(address)
    } catch (error) {
        console.error(error);
    }
}