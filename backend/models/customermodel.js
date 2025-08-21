const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    customer_name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
}, { collection: 'customer' });

// Create model
const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer