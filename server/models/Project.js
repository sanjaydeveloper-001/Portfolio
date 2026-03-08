import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  tech: [String],
  description: String,
  image: String, // URL or file path
  demo: String,
  repo: String,
});

export default mongoose.model('Project', projectSchema);