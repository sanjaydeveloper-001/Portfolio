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
// CORS — ABSOLUTE FIRST middleware
// Must run before everything so headers are
// always present even when routes crash with 500
// ─────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://sanjay-porthandler.vercel.app",
  "https://www.josan.tech",
  "https://josan.tech",
];

if (process.env.CLIENT_URL1) allowedOrigins.push(process.env.CLIENT_URL1);
if (process.env.CLIENT_URL2) allowedOrigins.push(process.env.CLIENT_URL2);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, curl, mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.warn(`⚠️  CORS blocked origin: ${origin}`);
    return callback(null, false);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Apply CORS to every request
app.use(cors(corsOptions));

// Explicitly handle ALL preflight OPTIONS requests
app.options("*", cors(corsOptions));

// ─────────────────────────────────────────────
// Force CORS headers on EVERY response
// Backup layer — ensures headers survive even
// when Express error handlers swallow them
// ─────────────────────────────────────────────
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS,PATCH"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type,Authorization,X-Requested-With"
    );
  }
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ─────────────────────────────────────────────
// Connect to MongoDB
// ─────────────────────────────────────────────
connectDB();

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
// Ensure uploads folder exists
// ─────────────────────────────────────────────
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Uploads folder created");
}
app.use("/files/uploads", express.static(uploadDir));

// ─────────────────────────────────────────────
// Debug route — visit https://www.josan.tech/debug
// to diagnose server & DB issues
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
    mongo: {
      state: mongoStates[mongoose.connection.readyState] || "unknown",
      readyState: mongoose.connection.readyState,
    },
    env: {
      NODE_ENV:    process.env.NODE_ENV    || "not set",
      PORT:        process.env.PORT        || "not set",
      MONGO_URI:   process.env.MONGO_URI   ? "✅ set" : "❌ MISSING — this is your 500 error",
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

  app.get("/*", (req, res) => {
    // Never serve index.html for API or debug routes
    if (req.path.startsWith("/user/") || req.path === "/debug") {
      return res.status(404).json({ message: "API route not found" });
    }
    res.sendFile(path.join(publicDir, "index.html"));
  });
} else {
  console.warn("⚠️  No public/ folder found — frontend not being served");
}

// ─────────────────────────────────────────────
// Global Error Handler
// 4-param signature is required by Express
// ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  console.error(err.stack);

  // Re-apply CORS headers — they can get dropped when errors are thrown
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
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
  console.log(`🔗 Health check: http://localhost:${PORT}/debug`);
});