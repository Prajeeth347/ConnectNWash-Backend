const express = require("express");
const router = express.Router();
const { createcloth, editprice, getprices,deletecloth } = require("../controllers/Cloth");
const { createplan, editpriceplan, getpricesplans,deleteplan } = require("../controllers/Plan");
const { createpincode, checkServiceable,deletepincode } = require("../controllers/Pincodes");
const {sendemailnode} = require("../controllers/query");
const { sendotp } = require("../controllers/otp");
const {createProfile,findProfile,findProfileID, deleteProfile,createEmployee,deleteEmployee,findEmployee,findEmployeeID,findEmployeepin,findEmployeeall} = require("../controllers/ProfilesCreation")
const {createaddress,editaddress,getAddresses,deleteaddress, getAddressesbyID} = require("../controllers/Address")
const {createorder,editorder,getordersadmin,getorderscust,getordersemp,assignnew} = require("../controllers/order")
router.post("/clothcreate", createcloth);
router.post("/editpricecloth", editprice);
router.get("/getclothprice", getprices);
router.post("/deletecloth", deletecloth);
router.post("/plancreate", createplan);
router.post("/editpriceplan", editpriceplan);
router.get("/getplanprice", getpricesplans);
router.post("/deleteplan", deleteplan);
router.post("/createpincode", createpincode);
router.post("/getpincodes", checkServiceable);
router.post("/deletepincode", deletepincode);
router.get("/sendmail",sendemailnode)
router.post("/sendotp",sendotp)
router.post("/createuser",createProfile)
router.post("/searchuser",findProfile)
router.post("/searchuserid",findProfileID)
router.post("/deleteuser",deleteProfile)
router.post("/createemp",createEmployee)
router.post("/searchemp",findEmployee)
router.post("/searchempid",findEmployeeID)
router.post("/deleteemp",deleteEmployee)
router.post("/createaddress",createaddress)
router.post("/getaddress",getAddresses)
router.post("/getaddressid",getAddressesbyID)
router.post("/updateadress",editaddress)
router.post("/deleteaddress",deleteaddress)
router.post("/findemppin",findEmployeepin)
router.get("/findempall",findEmployeeall)
router.post("/createorder",createorder)
router.post("/assignnew",assignnew)
router.post("/editorder",editorder)
router.get("/getordersadmin",getordersadmin)
router.post("/getorderemp",getordersemp)
router.post("/getord",getorderscust)

module.exports = router;
