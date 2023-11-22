import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    require: true,
  },
});

export default mongoose.model('Admin',adminSchema);
