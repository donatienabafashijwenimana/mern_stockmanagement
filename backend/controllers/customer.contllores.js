const mongoose = require('mongoose')
const Customer = require('../models/customermodel')

const addcustomer = async (req, res) => {
    try {
        const { c_name, contact, email, address } = req.body;
        const customer = new Customer({ customer_name:c_name, contact, email, address });
        await customer.save();
        res.json({ message: '✔️data well inserted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Read all customers
const readcustomer = async (req, res) => {
    try {
        const result = await Customer.find();
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a customer
const updatecustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { c_name, contact, email, address } = req.body;
        await Customer.findByIdAndUpdate(id, { customer_name:c_name, contact, email, address });
        res.json({ message: '✔️data well updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete a customer
const deletecustomer = async (req, res) => {
    try {
        const { id } = req.params;
        await Customer.findByIdAndDelete(id);
        res.json({ message: '✔️data well deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Export CRUD functions
module.exports = { addcustomer, readcustomer, updatecustomer, deletecustomer };