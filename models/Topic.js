// models/Topic.js
const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    Topic_name: String,
    Links: String,
    Subject_ID: Number
});

module.exports = mongoose.model("Topic", topicSchema);
