const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") }); // ✅ fixed path to root .env

const express = require("express");
const cors = require("cors");
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ CORS Configuration (Dev + Production)
const allowedOrigins = [
  'http://localhost:5173',          // Local dev
  'https://levldmdsp.com'           // Production domain
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// ✅ Serve static files from Vite build
app.use(express.static(path.join(__dirname, "..", "dist")));

// ✅ API Routes
app.use("/api/contact", require("./routes/contact"));

// ✅ Catch-all route for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ✅ Test DB connection
console.log('--- DB CONNECTION INFO ---');
console.log('Host:', process.env.DB_HOST);
console.log('User:', process.env.DB_USER);
console.log('Database:', process.env.DB_NAME);
console.log('Port:', process.env.DB_PORT);

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
});