const Clothes = require("../models/ClothesIndividualSchema");
const express = require('express');
 
exports.createcloth = async (req, res) => {
    try {
    const ClothName= req.body.Name;
    const Gender = req.body.Gender;
    const Price = req.body.Price;
    const Image = req.body.Image;
        const save_cloth = new Clothes({Name:ClothName,Gender:Gender,Price:Price,Image:Image});
        const final_saved_cloth = await save_cloth.save();
        res.status(200).json(final_saved_cloth);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};

exports.editprice = async (req,res) => {
    try{
        const id= req.body.id;
        const ClothName= req.body.Name;
        const Gender = req.body.Gender;
        const Price = req.body.Price;
        const Image = req.body.Image;
        const updatedPrice = await Clothes.findByIdAndUpdate({ _id: id }, {Name:ClothName,Gender:Gender,Price:Price,Image:Image});
        const final_updated = await updatedPrice.update();
        res.status(201).json(final_updated)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getprices = async(req,res) => {
    try {
        const clothes = await Clothes.find();
                res.status(200).json(clothes)
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.deletecloth = async(req,res) => {
    try {
        const id= req.body.id;
        var deleteclothquery = { _id: id };
        Clothes.deleteOne(deleteclothquery,function(err,obj){
            if (err) throw err;
            console.log("1 document deleted");
            res.status(200).json({Result:"Successfully Deleted"})
        })

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}