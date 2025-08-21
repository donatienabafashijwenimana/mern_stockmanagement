// supplierModel.js
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplier_name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    product_supply: { type: String, required: true }
}, { collection: 'supplier' });

const Supplier = mongoose.model('supplier', supplierSchema);

module.exports = Supplier;
