// models/Subject.js
const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    Subject_ID: Number,
    Subject_Name: String,
    Dept_ID: Number
});

module.exports = mongoose.model("Subject", subjectSchema);
