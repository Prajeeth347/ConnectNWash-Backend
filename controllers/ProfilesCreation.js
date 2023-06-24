const Customer = require("../models/Customerprofilemodel");
const express = require('express');
const Employee = require("../models/Employeeprofilemodel")
exports.createProfile = async (req, res) => {
    try {
    const Name= req.body.Name;
    const Gender = req.body.Gender
    const Mobile = req.body.Mobile
    const Email = req.body.Email
    const DOB = req.body.DOB
    const save_customer = new Customer({Name:Name,Gender:Gender,Mobile:Mobile,Email:Email,DOB:DOB});
    const final_saved_customer = await save_customer.save();
    res.status(200).json(final_saved_customer);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.findProfile = async (req,res) => {
    try {
    const Mobile = req.body.Mobile
        Customer.find({Mobile:Mobile},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                console.log("Second function call : ", docs);
                res.status(201).json(docs);
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.findProfileID = async (req,res) => {
    try {
    const id = req.body.id
        Customer.find({_id:id},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                console.log("Second function call : ", docs);
                res.status(201).json(docs);
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.deleteProfile = async(req,res) => {
    try {
        const Mobile= req.body.Mobile;
        var deletemobilequery = { "Mobile": Mobile };
        Customer.deleteOne(deletemobilequery,function(err,obj){
            if (err) throw err;
            console.log("1 document deleted");
            res.status(200).json({Result:"Successfully Deleted"})
        })

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.createEmployee = async (req, res) => {
    try {
    const Name= req.body.Name;
    const Gender = req.body.Gender
    const Mobile = req.body.Mobile
    const Email = req.body.Email
    const DOB = req.body.DOB
    const Address = req.body.Address
    const Pincode = req.body.Pincode
    const PincodesService = req.body.PincodesService
    const Latitude = req.body.Latitude
    const Longitude = req.body.Longitude
    const City = req.body.City
    const Services = req.body.Services
    const ServiceKM = req.body.ServiceKM
    const save_Employee = new Employee({Name:Name,Gender:Gender,Mobile:Mobile,Email:Email,DOB:DOB,Address:Address,Pincode:Pincode,PincodesService:PincodesService,Latitude:Latitude,Longitude:Longitude,City:City,Services:Services,ServiceKM:ServiceKM,Status:true});
    const final_saved_Employee = await save_Employee.save();
    res.status(200).json(final_saved_Employee);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.editemployee = async (req,res) => {
    try{
        const Name= req.body.Name;
        const Gender = req.body.Gender
        const Mobile = req.body.Mobile
        const Email = req.body.Email
        const DOB = req.body.DOB
        const Address = req.body.Address
        const Pincode = req.body.Pincode
        const PincodesService = req.body.PincodesService
        const Latitude = req.body.Latitude
        const Longitude = req.body.Longitude
        const City = req.body.City
        const Services = req.body.Services
        const ServiceKM = req.body.ServiceKM
        const id = req.body.id
        const status = req.body.status
        const updatedPrice = await Clothes.findByIdAndUpdate({ _id: id }, {Name:Name,Gender:Gender,Mobile:Mobile,Email:Email,DOB:DOB,Address:Address,Pincode:Pincode,PincodesService:PincodesService,Latitude:Latitude,Longitude:Longitude,City:City,Services:Services,ServiceKM:ServiceKM,Status:status});
        // const final_updated = await updatedPrice.update();
        res.status(201).json(updatedPrice)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.findEmployee = async (req,res) => {
    try {
    const Mobile = req.body.Mobile
        Employee.find({Mobile:Mobile},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.findEmployeeall = async (req,res) => {
    try {
        const Employees = await Employee.find();
                res.status(200).json(Employees)
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.findEmployeeID = async (req,res) => {
    try {
    const id = req.body.id
        Employee.find({_id:id},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.findEmployeepin = async (req,res) => {
    try {
    const pin = req.body.pin
        Employee.find({PincodesService: {$all: [pin]}},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.deleteEmployee = async(req,res) => {
    try {
        const Mobile= req.body.Mobile;
        var deletemobilequery = { "Mobile": Mobile };
        Employee.deleteOne(deletemobilequery,function(err,obj){
            if (err) throw err;
            console.log("1 document deleted");
            res.status(200).json({Result:"Successfully Deleted"})
        })

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}