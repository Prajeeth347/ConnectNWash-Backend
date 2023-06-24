const Orders = require("../models/ordersmodel");
const express = require('express');
const Customer = require("../models/Customerprofilemodel");
const Employee = require("../models/Employeeprofilemodel");
const Address = require("../models/addressmodel");

function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
        dist = dist * 1.609344 
		return dist;
	}
}

exports.createorder = async (req, res) => {
    try {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30 
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    const totalcost = req.body.totalcost
    const Custid= req.body.Custid;
    const Addid = req.body.Addid
    const items = req.body.items
        Address.find({_id:Addid},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                const pincust = docs[0].Pincode
                const Laticust = docs[0].Latitude
                const Longicust = docs[0].Longitude
                Employee.find({PincodesService: {$all: [pincust]}},async(err,docs) => {
                    if (err){
                        console.log(err);
                        res.status(404).json(err);
                    }
                    else{
                        let indexseremp = 0;
                        let disseremp = 1000;
                        for(let i=0;i<docs.length;i++){
                            let dis = distance(Laticust,Longicust,docs[i].Latitude,docs[i].Longitude)
                            if(dis<disseremp && docs[i].ServiceKM > dis) {
                                disseremp = dis;
                                indexseremp = i;
                            }
                        }
                        const empid = docs[indexseremp]._id
                        
                        
                        const save_order = new Orders({addressid:Addid,custid:Custid,empid:empid,items:items,status:1,datetime:ISTTime,totalcost:totalcost});
                        const final_saved_order = await save_order.save();
                        res.status(200).json(final_saved_order);
                    }
                     })
            }
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};

exports.editorder = async (req,res) => {
    try{
        const id = req.body.id;
        const Custid= req.body.Custid;
        const Addid = req.body.Addid;
        const items = req.body.items;
        const empid = req.body.empid;
        const status = req.body.status;
        const datetime = req.body.datetime;
        const cost = req.body.cost;
        const updatedAddress = await Orders.findByIdAndUpdate({ _id: id }, {addressid:Addid,custid:Custid,empid:empid,items:items,status:status,datetime:datetime,totalcost:cost});
        const final_updated = await updatedAddress.update();
        res.status(201).json(final_updated)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getorderscust = async(req,res) => {
    try {
        const custid = req.body.custid
        Orders.find({custid:custid},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getordersemp = async(req,res) => {
    try {
        const empid = req.body.empid
        Orders.find({empid:empid},function(err,docs){
            if (err){
                console.log(err);
                res.status(404).json(err);
            }
            else{
                res.status(201).json(docs);
            }
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}

exports.getordersadmin = async(req,res) => {
    try {
        const orders = await Orders.find();
        res.status(201).json(orders)
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "fail", error: error });
    }
}