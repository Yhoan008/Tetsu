import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  cost: {
    type: Number,
    require: true,
  },
  descrip: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: false,
  },
  images: {
    type: Array,
    require: false,
  },
});

export default mongoose.model("Product", productSchema);
