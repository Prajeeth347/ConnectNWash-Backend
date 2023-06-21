const mongoose = require("mongoose");
exports.dbconnection = () => {
    mongoose
        .connect("mongodb+srv://connectnwash:Sai3344@connectnwash.omhtzqk.mongodb.net/Main", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connection to MONGODB successful");
        })
        .catch((err) => {
            console.log(err);
        });
};
