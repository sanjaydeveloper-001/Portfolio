import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  id: Number,
  institution: String,
  course: String,
  duration: String,
  cgpa: String,
  percentage: String,
});

export default mongoose.model('Education', educationSchema);