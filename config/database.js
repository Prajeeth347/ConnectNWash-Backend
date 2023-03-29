const mongoose = require("mongoose");
exports.dbconnection = () => {
    mongoose
        .connect("mongodb+srv://Prajeeth:Prajju347@cluster0.irysoc7.mongodb.net/restaurant", {
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
