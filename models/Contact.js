import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String },
  phone:   { type: String },
  type:    { type: String, enum: ['personal','business'], default: 'personal' },
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
