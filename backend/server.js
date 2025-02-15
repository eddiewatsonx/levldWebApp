require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Explicitly allow your frontend
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/contact", require("./routes/contact"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
});