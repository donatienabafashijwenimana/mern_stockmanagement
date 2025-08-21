// supplierController.js
const Supplier = require('../models/suppliermodel');

// Add a new supplier
const addsupplier = async (req, res) => {
    try {
        const { s_name, contact, email, address, product_supply } = req.body;
        const supplier = new Supplier({ supplier_name:s_name, contact, email, address, product_supply });
        await supplier.save();
        res.json({ message: '✔️data well inserted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Read all suppliers
const readsupplier = async (req, res) => {
    try {
        const result = await Supplier.find();
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a supplier
const updatesupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { s_name:s_name, contact, email, address, product_supply } = req.body;
        await Supplier.findByIdAndUpdate(id, { supplier_name:s_name, contact, email, address, product_supply });
        res.json({ message: '✔️data well updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete a supplier
const deletesupplier = async (req, res) => {
    try {
        const { id } = req.params;
        await Supplier.findByIdAndDelete(id);
        res.json({ message: '✔️data well deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { addsupplier, readsupplier, updatesupplier, deletesupplier };
