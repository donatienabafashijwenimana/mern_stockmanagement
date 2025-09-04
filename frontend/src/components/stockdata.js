// utils/groupStockData.js
export function groupStockData(data) {
  const grouped = {};
  const allProducts = new Set();

  data.forEach((item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    const product = item.product?.product_name || item.product;
    const quantity = item.quantity;

    allProducts.add(product);

    if (!grouped[month]) grouped[month] = {};
    if (!grouped[month][product]) grouped[month][product] = 0;

    grouped[month][product] += quantity;
  });

  const chartData = Object.entries(grouped).map(([month, products]) => ({
    month,
    ...products,
  }));

  return { chartData, products: [...allProducts] };
}
