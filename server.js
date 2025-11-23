// server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("./db");

// Models
const Admin = require("./models/Admin");

// Routes
const departmentRoutes = require("./routes/departmentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const topicRoutes = require("./routes/topicRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ------------------------------
// HOME ROUTE
// ------------------------------
app.get("/", (req, res) => {
    res.send("MongoDB Backend is running!");
});

// ------------------------------
// USE ROUTES (CLEAN & CORRECT)
// ------------------------------
app.use("/departments", departmentRoutes);   // Department + Subjects inside
app.use("/subjects", subjectRoutes);         // Topics inside subjects
app.use("/topics", topicRoutes);             // (optional future use)

// ------------------------------
// ADMIN LOGIN
// ------------------------------
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });
        if (!admin) return res.json({ success: false });

        const match = await bcrypt.compare(password, admin.password);
        res.json({ success: match });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

// ------------------------------
// ADMIN REGISTER
// ------------------------------
app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        const exists = await Admin.findOne({ username });
        if (exists) {
            return res.json({ success: false, message: "Username already exists" });
        }

        const hashed = await bcrypt.hash(password, 10);
        await new Admin({ username, password: hashed }).save();

        res.json({ success: true });
    } catch (err) {
        res.json({ success: false });
    }
});

// ------------------------------
// START SERVER
// ------------------------------
app.listen(PORT, () => {
    console.log(`MongoDB Backend running at http://localhost:${PORT}`);
});
