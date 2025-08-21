// warehouseModel.js
const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    warehouse_name: { type: String, required: true },
    location: { type: String, required: true },
    manager: { type: String, required: true },
    description: { type: String, required: true }
}, { collection: 'warehouse' });

const Warehouse = mongoose.model('warehouse', warehouseSchema);

module.exports = Warehouse;
