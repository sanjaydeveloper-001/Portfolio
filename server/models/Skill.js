import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
  name: String,
  level: Number,
});

const skillSchema = new mongoose.Schema({
  languages: [languageSchema],
  frameworks_tools: [String],
  softSkills: [String],
});

export default mongoose.model('Skill', skillSchema);