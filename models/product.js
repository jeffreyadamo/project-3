const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // url for Product web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  },
  summary: {
    type: String,
    default: ""
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
