const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/api-jwt");

const db = mongoose.connection;

db.once("open", (err) => {
    err
        ? console.log("Database not connected")
        : console.log("Database connected successfully");
});

module.exports = db;
