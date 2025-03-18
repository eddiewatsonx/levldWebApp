require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;  // Ensure this is flexible for AWS

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Change this to your AWS domain if needed
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, "..", "backend", "dist")));

// API Routes
app.use("/api/contact", require("./routes/contact"));

// Catch-all route to serve React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "backend", "dist", "index.html"));
});

// Start the server
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