const sorder = require("../models/salesorder");

// Create
const add_s_order = async (req, res) => {
  try {
    const {product,quantity,customer,warehouse,o_date,expected_date} = req.body;
    const newsorder = new sorder({
         product,
         quantity,
         customer,
         warehouse,
         order_date:o_date,
         expected_date
    })
    await newsorder.save();
    res.json({ message: "✔️Data well inserted"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to insert order" });
  }
};

// Read
const read_s_order = async (req, res) => {
  try {
    const orders = await sorder.find()
      .populate("product")
      .populate("customer")
      .populate("warehouse");
    res.json({ result: orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to fetch orders" });
  }
};

// Update
const update_s_order = async (req, res) => {
  try {
    const { id } = req.params;
    const {product,quantity,customer,warehouse,o_date,expected_date} = req.body
     await sorder.findByIdAndUpdate(id,
      {product,quantity,customer,warehouse,order_date:o_date,expected_date});
    res.json({ message: "✔️Data well updated"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to update order" });
  }
};

// Delete
const delete_s_order = async (req, res) => {
  try {
    const { id } = req.params;
    await sorder.findByIdAndDelete(id);
    res.json({ message: "✔️Data well deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to delete order" });
  }
};

module.exports = { add_s_order, read_s_order, update_s_order, delete_s_order };
