const express = require("express");
const router = express.Router();

const Department = require("../models/Department");
const Subject = require("../models/Subject");

// --------------------------
// GET ALL DEPARTMENTS
// --------------------------
router.get("/", async (req, res) => {
    try {
        const departments = await Department.find({}, { _id: 0 });
        res.json(departments);
    } catch (err) {
        res.status(500).json({ error: "Error fetching departments" });
    }
});

// --------------------------
// GET SUBJECTS BY DEPARTMENT
// --------------------------
router.get("/:deptId/subjects", async (req, res) => {
    try {
        const deptId = Number(req.params.deptId);
        const subjects = await Subject.find({ Dept_ID: deptId }, { _id: 0 });
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ error: "Error fetching subjects" });
    }
});

module.exports = router;
