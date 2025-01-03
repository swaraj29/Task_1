const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

// Apply CORS middleware
const corsOptions = {
  origin: ["https://task-1-jade-sigma.vercel.app"], // Allow requests from this origin
  credentials: true, // Include credentials in the requests
};
app.use(cors(corsOptions)); // Enable CORS with the specified options

app.use(express.json()); // For parsing JSON requests
app.use("/api/auth", authRoutes); // Authentication routes

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
