import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema({
  interests: [String],
});

export default mongoose.model('Interest', interestSchema);