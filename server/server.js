import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

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

// ─────────────────────────────────────────────
// Load env variables FIRST
// ─────────────────────────────────────────────
dotenv.config();

const app = express();

// ─────────────────────────────────────────────
// Setup __dirname for ES Modules
// ─────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─────────────────────────────────────────────
// CORS Configuration — allow both origins
// ─────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  "https://www.josan.tech",
  "https://porthandler.josan.tech",
  "http://localhost:3000",  // Add for local development if needed
  "http://localhost:5173",  // Add for Vite dev server if needed
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    // Check if origin is in allowed list
    if (ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`🚫 CORS: Blocked origin — ${origin}`);
      callback(new Error(`CORS: Origin ${origin} is not allowed`));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,  // Allow credentials (cookies, auth headers)
  optionsSuccessStatus: 200,
  maxAge: 86400,  // Cache preflight for 24 hours
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options("*", cors(corsOptions));

// ─────────────────────────────────────────────
// Additional Security Headers Middleware
// ─────────────────────────────────────────────
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Set CORS headers for allowed origins
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Max-Age", "86400");
  }

  // Prevent OPTIONS from causing issues
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ─────────────────────────────────────────────
// Security Headers
// ─────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

// ─────────────────────────���───────────────────
// Connect to MongoDB
// ─────────────────────────────────────────────
connectDB();

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️  MongoDB disconnected");
});

// ─────────────────────────────────────────────
// Body parsers
// ─────────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ─────────────────────────────────────────────
// Ensure uploads folder exists
// ─────────────────────────────────────────────
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Uploads folder created at:", uploadDir);
}
app.use("/files/uploads", express.static(uploadDir));

// ─────────────────────────────────────────────
// Root route
// ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    message: "Server is running ✅",
    timestamp: new Date().toISOString(),
    allowedOrigins: ALLOWED_ORIGINS,
  });
});

// ─────────────────────────────────────────────
// Health/Debug route
// ─────────────────────────────────────────────
app.get("/debug", (req, res) => {
  const mongoStates = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  res.json({
    status: "Server is running ✅",
    timestamp: new Date().toISOString(),
    requestOrigin: req.headers.origin || "none",
    allowedOrigins: ALLOWED_ORIGINS,
    mongo: {
      state: mongoStates[mongoose.connection.readyState] || "unknown",
      readyState: mongoose.connection.readyState,
    },
    environment: {
      NODE_ENV: process.env.NODE_ENV || "not set",
      PORT: process.env.PORT || "not set",
      MONGO_URI: process.env.MONGO_URI ? "✅ set" : "❌ MISSING",
    },
  });
});

// ─────────────────────────────────────────────
// API Routes
// ─────────────────────────────────────────────
app.use("/user/profile", profileRoutes);
app.use("/user/education", educationRoutes);
app.use("/user/experience", experienceRoutes);
app.use("/user/projects", projectRoutes);
app.use("/user/skills", skillRoutes);
app.use("/user/certifications", certificationRoutes);
app.use("/user/interests", interestRoutes);
app.use("/user/upload", uploadRoutes);

// ─────────────────────────────────────────────
// 404 handler
// ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.path,
    method: req.method,
  });
});

// ─────────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  console.error(err.stack);

  const origin = req.headers.origin;

  // Set CORS headers in error response as well
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Vary", "Origin");
  }

  // Handle CORS errors
  if (err.message?.includes("CORS")) {
    return res.status(403).json({
      message: "CORS Error: Your origin is not allowed",
      origin: origin || "unknown",
      allowedOrigins: ALLOWED_ORIGINS,
    });
  }

  // Handle validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      error: process.env.NODE_ENV === "development" ? err.message : "Invalid request data",
    });
  }

  // Handle MongoDB errors
  if (err.name === "MongoError" || err.name === "MongoServerError") {
    return res.status(500).json({
      message: "Database Error",
      error: process.env.NODE_ENV === "development" ? err.message : "Database operation failed",
    });
  }

  // Generic error response
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err : undefined,
    timestamp: new Date().toISOString(),
  });
});

// ─────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`\n${"═".repeat(50)}`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/debug`);
  console.log(`📍 Allowed Origins:`);
  ALLOWED_ORIGINS.forEach((origin) => console.log(`   ✓ ${origin}`));
  console.log(`${"═".repeat(50)}\n`);
});

// ─────────────────────────────────────────────
// Graceful Shutdown
// ─────────────────────────────────────────────
process.on("SIGTERM", () => {
  console.log("⚠️  SIGTERM received, shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    mongoose.connection.close(false, () => {
      console.log("✅ MongoDB connection closed");
      process.exit(0);
    });
  });
});

process.on("SIGINT", () => {
  console.log("⚠️  SIGINT received, shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    mongoose.connection.close(false, () => {
      console.log("✅ MongoDB connection closed");
      process.exit(0);
    });
  });
});

export default app;