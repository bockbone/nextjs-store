import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the product"],
    maxlength: [80, "Name cannot be more than 80 characters"],
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
