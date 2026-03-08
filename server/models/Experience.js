import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  id: Number,
  company: String,
  role: String,
  duration: String,
  description: String,
  type: String,
});

export default mongoose.model('Experience', experienceSchema);