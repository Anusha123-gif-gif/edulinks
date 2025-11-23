const express = require("express");
const router = express.Router();

const Topic = require("../models/Topic");

// --------------------------
// GET TOPICS BY SUBJECT ID
// --------------------------
router.get("/:subjectId/topics", async (req, res) => {
    try {
        const subjectId = Number(req.params.subjectId);
        const topics = await Topic.find({ Subject_ID: subjectId }, { _id: 0 });
        res.json(topics);
    } catch (err) {
        res.status(500).json({ error: "Error fetching topics" });
    }
});

module.exports = router;
