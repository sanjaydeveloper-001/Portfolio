import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import cors from "cors";
import connectDB from "./config/db.js";

// Route imports
import profileRoutes from "./routes/profileRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import experienceRoutes from "./routes/experienceRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import certificationRoutes from "./routes/certificationRoutes.js";
import interestRoutes from "./routes/interestRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin:["https://porthandler.josan.tech","https://www.josan.tech"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
));

// app.use(cors({
//     origin:["https://www.josan.tech"],
//     methods: ["GET"],
//   }
// ));

// ========== Connect to MongoDB ==========
connectDB();

mongoose.connection.on("connected", () => console.log("✅ MongoDB connected"));
mongoose.connection.on("error", (err) => console.error("❌ MongoDB connection error:", err));
mongoose.connection.on("disconnected", () => console.warn("⚠️  MongoDB disconnected"));

// ========== Body Parsers ==========
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ========== Static Files ==========
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Uploads folder created");
}
app.use("/files/uploads", express.static(uploadDir));

// ========== Root Route ==========
app.get("/", (req, res) => {
  res.json({ message: "Server is running ✅" });
});

// ========== Debug Route ==========
app.get("/debug", (req, res) => {
  const mongoStates = { 0: "disconnected", 1: "connected", 2: "connecting", 3: "disconnecting" };
  res.json({
    status: "Server is running ✅",
    timestamp: new Date().toISOString(),
    mongo: {
      state: mongoStates[mongoose.connection.readyState] || "unknown",
      readyState: mongoose.connection.readyState,
    },
    env: {
      NODE_ENV:  process.env.NODE_ENV  || "not set",
      PORT:      process.env.PORT      || "not set",
      MONGO_URI: process.env.MONGO_URI ? "✅ set" : "❌ MISSING",
    },
  });
});

// ========== API Routes ==========
app.use("/user/profile",        profileRoutes);
app.use("/user/education",      educationRoutes);
app.use("/user/experience",     experienceRoutes);
app.use("/user/projects",       projectRoutes);
app.use("/user/skills",         skillRoutes);
app.use("/user/certifications", certificationRoutes);
app.use("/user/interests",      interestRoutes);
app.use("/user/upload",         uploadRoutes);

// ========== 404 Handler ==========
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ========== Global Error Handler ==========
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  console.error(err.stack);

  // Ensure CORS headers are still set on error responses
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }

  if (err.message?.startsWith("CORS:")) {
    return res.status(403).json({ message: err.message });
  }

  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// ========== Start Server ==========
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/debug`);
});