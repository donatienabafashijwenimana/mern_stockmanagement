const mongoose = require("mongoose");

const s_orderschema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true
  },
  quantity: {
    type: Number
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true
  },
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "warehouse",
    required: true
  },
  order_date: { type: Date },
  expected_date: { type: Date },
  delivered_date: { type: Date, default: null },
  delivered_quantity: { type: Number, default: null },
  price: { type: Number, default: null },
  status: { type: String, default: "pending" }
}, { timestamps: true });

const sorder = mongoose.model("sales_order", s_orderschema);

module.exports = sorder;
