const express = require("express");
const router = express.Router();

const Department = require("../models/Department");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");

// --------------------------
// GET ALL DEPARTMENTS
// --------------------------
router.get("/departments", async (req, res) => {
    try {
        const departments = await Department.find({}, { _id: 0 });
        res.json(departments);
    } catch (err) {
        res.status(500).json({ error: "Error fetching departments" });
    }
});

// --------------------------
// GET SUBJECTS BY DEPT ID
// --------------------------
router.get("/departments/:deptId/subjects", async (req, res) => {
    try {
        const deptId = Number(req.params.deptId);
        const subjects = await Subject.find({ Dept_ID: deptId }, { _id: 0 });
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ error: "Error fetching subjects" });
    }
});

// --------------------------
// GET TOPICS BY SUBJECT ID
// --------------------------
router.get("/subjects/:subjectId/topics", async (req, res) => {
    try {
        const subjectId = Number(req.params.subjectId);
        const topics = await Topic.find({ Subject_ID: subjectId }, { _id: 0 });
        res.json(topics);
    } catch (err) {
        res.status(500).json({ error: "Error fetching topics" });
    }
});

module.exports = router;
