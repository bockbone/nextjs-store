import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the product"],
    maxlength: [80, "Name cannot be more than 80 characters"],
  },
  sku: {
    type: Number,
  },
  price: {
    type: Number,
    // required: [true, "Please provide a price for the product"],
  },
  description: {
    type: String,
    // required: [true, "Please provide a description for the product"],
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    // required: [true, "Please provide a category for the product"],
  },
  stock: {
    type: Number,
    // required: [true, "Please provide a stock quantity for the product"],
  },
  published: {
    type: Boolean,
    default: false,
  },
  images: [String],
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
