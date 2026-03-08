import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  id: Number,
  name: String,
  issuer: String,
  image: String, // URL
  link: String,
});

export default mongoose.model('Certification', certificationSchema);