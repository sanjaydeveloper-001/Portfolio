import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  id: Number,
  name: String,
  link: String,
  icon: String, // store icon name as string
});

const socialSchema = new mongoose.Schema({
  id: Number,
  name: String,
  link: String,
  icon: String,
  color: String,
});

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  domain: String,
  summary: String,
  location: String,
  phone: String,
  email: String,
  cvLink: String,
  profilePhoto: String, // <-- new field for profile image URL
  contact: [contactSchema],
  social: [socialSchema],
});

export default mongoose.model('Profile', profileSchema);