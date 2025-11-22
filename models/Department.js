// models/Department.js
const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    Dept_ID: Number,
    Dept_Name: String
});

module.exports = mongoose.model("Department", departmentSchema);
