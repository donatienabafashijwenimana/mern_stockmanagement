const porder = require("../models/purchasingorder");

// Create
const add_p_order = async (req, res) => {
  try {
    const {product,quantity,supplier,warehouse,o_date,expected_date} = req.body;
    const newporder = new porder({
         product,
         quantity,
         supplier,
         warehouse,
         order_date:o_date,
         expected_date
    })
    await newporder.save();
    res.json({ message: "✔️Data well inserted"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to insert order" });
  }
};

// Read
const read_p_order = async (req, res) => {
  try {
    const orders = await porder.find()
      .populate("product")
      .populate("supplier")
      .populate("warehouse");
    res.json({ result: orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to fetch orders" });
  }
};

// Update
const update_p_order = async (req, res) => {
  try {
    const { id } = req.params;
    const {product,quantity,supplier,warehouse,o_date,expected_date} = req.body
     await porder.findByIdAndUpdate(id,
      {product,quantity,supplier,warehouse,order_date:o_date,expected_date});
    res.json({ message: "✔️Data well updated"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to update order" });
  }
};

// Delete
const delete_p_order = async (req, res) => {
  try {
    const { id } = req.params;
    await porder.findByIdAndDelete(id);
    res.json({ message: "✔️Data well deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "⚠️Failed to delete order" });
  }
};

module.exports = { add_p_order, read_p_order, update_p_order, delete_p_order };
