const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true },
  unit_measure: { type: String, required: true },
  cost_price: { type: Number, required: true },
  sold_price: { type: Number, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

module.exports = mongoose.model("products", productSchema);
