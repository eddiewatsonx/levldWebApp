require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // For dev only, can update for prod
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// ✅ Serve static files from Vite build
app.use(express.static(path.join(__dirname, "..", "dist")));

// API Routes
app.use("/api/contact", require("./routes/contact"));

// ✅ Catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
});