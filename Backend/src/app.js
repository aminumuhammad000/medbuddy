const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const morgan = require("morgan");

// DB Connection
connectDB();

// Middleware
app.use(
  morgan("combined", {
    stream: { write: (msg) => logger.info(msg.trim()) },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://medbuddy-cpvv.onrender.com"], // ✅ frontend origin
    credentials: true, // ✅ allow credentials
  })
);

// Routes
app.use("/api", userRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
