
const express = require("express");
const app = express();
const route = require("./routes/route")

app.use(express.json());
// app.use(authroute);
// app.use(projectroute);
app.use(route)

module.exports = app;
