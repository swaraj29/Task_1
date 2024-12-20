const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

// Apply CORS middleware
app.use(cors()); // Enable CORS for all origins

app.use(express.json()); // For parsing JSON requests
app.use("/api/auth", authRoutes); // Authentication routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
