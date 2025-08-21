const mongoose = require("mongoose");

const p_orderschema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true
  },
  quantity: {
    type: Number
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supplier",
    required: true
  },
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "warehouse",
    required: true
  },
  order_date: { type: Date },
  expected_date: { type: Date },
  received_date: { type: Date, default: null },
  received_quantity: { type: Number, default: null },
  price: { type: Number, default: null },
  status: { type: String, default: "pending" }
}, { timestamps: true });

const POrder = mongoose.model("purchasing_order", p_orderschema);

module.exports = POrder;
