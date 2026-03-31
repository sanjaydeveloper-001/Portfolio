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

// Load env variables FIRST before anything else
dotenv.config();

const app = express();

// ─────────────────────────────────────────────
// CORS — must be FIRST, before all other middleware
// ─────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://sanjay-porthandler.vercel.app",
  "https://www.josan.tech",
  "https://josan.tech",
];

// Add any extra origins from .env
if (process.env.CLIENT_URL1) allowedOrigins.push(process.env.CLIENT_URL1);
if (process.env.CLIENT_URL2) allowedOrigins.push(process.env.CLIENT_URL2);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    console.warn(`CORS blocked for origin: ${origin}`);
    return callback(new Error(`CORS policy: origin ${origin} not allowed`));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Handle ALL preflight OPTIONS requests
app.options("*", cors(corsOptions));

// ─────────────────────────────────────────────
// Connect to MongoDB
// ─────────────────────────────────────────────
connectDB();

// MongoDB connection monitoring
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
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
// Setup __dirname for ES Modules
// ─────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─────────────────────────────────────────────
// Ensure uploads folder exists
// ─────────────────────────────────────────────
const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Uploads folder created");
}

// Serve uploaded files statically
app.use("/files/uploads", express.static(uploadDir));

// ─────────────────────────────────────────────
// Debug route — visit /debug to check server health
// Remove this in production once confirmed working
// ─────────────────────────────────────────────
app.get("/debug", (req, res) => {
  const mongoStates = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };
  res.json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
    mongo: {
      state: mongoStates[mongoose.connection.readyState] || "unknown",
      readyState: mongoose.connection.readyState,
    },
    env: {
      NODE_ENV:    process.env.NODE_ENV    || "not set",
      PORT:        process.env.PORT        || "not set",
      MONGO_URI:   process.env.MONGO_URI   ? "✅ set" : "❌ MISSING",
      CLIENT_URL1: process.env.CLIENT_URL1 || "not set",
      CLIENT_URL2: process.env.CLIENT_URL2 || "not set",
    },
    allowedOrigins,
  });
});

// ─────────────────────────────────────────────
// API Routes
// ─────────────────────────────────────────────
app.use("/user/profile",        profileRoutes);
app.use("/user/education",      educationRoutes);
app.use("/user/experience",     experienceRoutes);
app.use("/user/projects",       projectRoutes);
app.use("/user/skills",         skillRoutes);
app.use("/user/certifications", certificationRoutes);
app.use("/user/interests",      interestRoutes);
app.use("/user/upload",         uploadRoutes);

// ─────────────────────────────────────────────
// Serve Frontend (React/Vite build)
// ─────────────────────────────────────────────
const publicDir = path.join(__dirname, "public");

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  // SPA fallback — serve index.html for all non-API routes
  app.get("/*", (req, res) => {
    // Don't serve index.html for /user/* API routes
    if (req.path.startsWith("/user/")) {
      return res.status(404).json({ message: "API route not found" });
    }
    res.sendFile(path.join(publicDir, "index.html"));
  });
} else {
  console.warn("⚠️  No public/ folder found — frontend not being served");
}

// ─────────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  // Log the full error for debugging
  console.error("🔥 Server Error:", err.message);
  console.error(err.stack);

  // Handle CORS errors specifically
  if (err.message && err.message.startsWith("CORS policy")) {
    return res.status(403).json({ message: err.message });
  }

  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// ─────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Debug: http://localhost:${PORT}/debug`);
});