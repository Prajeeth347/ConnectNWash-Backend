const Plans = require("../models/PlansIndividualmodel");
const express = require('express');
 
exports.createplan = async (req, res) => {
    try {
    const PlanName= req.body.Name;
    const Gender = req.body.Gender;
    const Price = req.body.Price;
    const Image = req.body.Image;
    const About = req.body.About
        const save_plan = new Plans({Name:PlanName,Gender:Gender,Price:Price,Image:Image,About:About});
        const final_saved_plan = await save_plan.save();
        res.status(200).json(final_saved_plan);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};

exports.editpriceplan = async (req,res) => {
    try{
        const id= req.body.id;
        const planName= req.body.Name;
        const Gender = req.body.Gender;
        const Price = req.body.Price;
        const Image = req.body.Image;
        const About = req.body.About
        const updatedPrice = await Plans.findByIdAndUpdate({ _id: id }, {Name:planName,Gender:Gender,Price:Price,Image:Image,About:About});
        // const final_updated = await updatedPrice.update();
        res.status(201).json(updatedPrice)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getpricesplans = async(req,res) => {
    try {
        const plans = await Plans.find();
                res.status(200).json(plans)
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.deleteplan = async(req,res) => {
    try {
        const id= req.body.id;
        var deleteplanquery = { _id: id };
        Plans.deleteOne(deleteplanquery,function(err,obj){
            if (err) throw err;
            console.log("1 document deleted");
            res.status(200).json({Result:"Successfully Deleted"})
        })

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}