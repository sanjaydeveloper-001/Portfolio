import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';

// Route imports
import profileRoutes from './routes/profileRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';
import interestRoutes from './routes/interestRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import mongoose from 'mongoose';

dotenv.config();
connectDB();

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  // Don't crash, just log
}); 
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://port-sanjayhandler.vercel.app"
  ]
}))


app.use(express.json());

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('✅ Uploads folder created');
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadDir));

// API Routes
app.use('/api/profile', profileRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/interests', interestRoutes);
app.use('/api/upload', uploadRoutes);

// Optional: Basic error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));  