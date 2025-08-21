const Product = require("../models/productmodel");

// ✅ Add product
const addproduct = async (req, res) => {
  try {
    const { p_name, category, u_measure, c_price, s_price, status } = req.body;
    const newProduct = new Product({
         product_name:p_name, category, unit_measure:u_measure, cost_price:c_price,
          sold_price:s_price, status });
    await newProduct.save();
    res.json({ message: "✔️data well inserted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "⚠️error occurred" });
  }
};

// ✅ Read products (with category details)
const readproduct = async (req, res) => {
  try {
    const result = await Product.find().populate("category", "category category_name"); // only fetch category name
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "⚠️error occurred" });
  }
};

// ✅ Update product
const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { p_name, category, u_measure, c_price, s_price, status } = req.body;

    await Product.findByIdAndUpdate(id, {
      product_name:p_name, category, unit_measure:u_measure, cost_price:c_price, sold_price:s_price, status
    });

    res.json({ message: "✔️data well updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "⚠️error occurred" });
  }
};

// ✅ Delete product
const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "✔️data well deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "⚠️error occurred" });
  }
};

module.exports = { addproduct, readproduct, updateproduct, deleteproduct };
