// warehouseController.js
const Warehouse = require('../models/warehousemodel');

// Add a new warehouse
const addwarehouse = async (req, res) => {
    try {
        const { w_name, location, manager, description } = req.body;
        const warehouse = new Warehouse({ warehouse_name:w_name, location, manager, description });
        await warehouse.save();
        res.json({ message: '✔️data well inserted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Read all warehouses
const readwarehouse = async (req, res) => {
    try {
        const result = await Warehouse.find();
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a warehouse
const updatewarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        const { w_name, location, manager, description } = req.body;
        await Warehouse.findByIdAndUpdate(id, { warehouse_name:w_name, location, manager, description });
        res.json({ message: '✔️data well updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete a warehouse
const deletewarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        await Warehouse.findByIdAndDelete(id);
        res.json({ message: '✔️data well deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { addwarehouse, readwarehouse, updatewarehouse, deletewarehouse };
