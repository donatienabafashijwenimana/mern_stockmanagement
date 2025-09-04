import React, { useEffect, useState } from "react";
import { productstore } from "../store/productstore";
import { categorystore } from "../store/categorystore";
import { supplierstore } from "../store/supplier";
import { warehousestore } from "../store/warehouse";
import { customerstore } from "../store/customer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { axiosinstance } from "../store/axiosinstance";
import { groupStockData } from "./stockdata";

function Dashboard() {
  require("../css/dashboard.css");

  const { setproductlist, product_list } = productstore();
  const { setcategorieslist, categorieslist } = categorystore();
  const { setsupplierlist, supplier_list } = supplierstore();
  const { setwarehouselist, warehouse_list } = warehousestore();
  const { setcustomerlist, customer_list } = customerstore();

  const [purchasing_order, setpurchasing_order] = useState([]);
  const [sales_order, setsalesorder] = useState([]);
  const [stockinData, setStockindata] = useState([]);
  const [stockoutData, setStockoutdata] = useState([]);
  const [productsin, setProductin] = useState([]);
  const [productsout, setProductout] = useState([]);

  // Load main lists
  useEffect(() => {
    setproductlist();
    setsupplierlist();
    setcategorieslist();
    setwarehouselist();
    setcustomerlist();
  }, []);

  // Group orders by status
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res1 = await axiosinstance.get("/porder/readporder");
        const porders = res1.data.result;

        const res2 = await axiosinstance.get("/sorder/readsorder");
        const sorders = res2.data.result;

        const groupdata = (orders) => {
          const grouped = {};
          orders.forEach((order) => {
            const status = order.status;
            if (!grouped[status]) {
              grouped[status] = { status, count: 0 };
            }
            grouped[status].count += 1;
          });
          return Object.values(grouped);
        };

        setpurchasing_order(groupdata(porders));
        setsalesorder(groupdata(sorders));
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrders();
  }, []);

  
   useEffect(() => {
    const fetchStockIn = async () => {
      try {
        const res1 = await axiosinstance.get("/stock/readstockin");
        var { chartData, products } = groupStockData(res1.data);

        setStockindata(chartData);
        setProductin(products);

        const res2 = await axiosinstance.get("/stock/readstockout");
        var { chartData, products } = groupStockData(res2.data);

        setStockoutdata(chartData);
        setProductout(products);

      } catch (error) {
        console.error("Failed to fetch stock in", error);
      }
    };

    fetchStockIn();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-row">
        <div className="dashboard-card dashboard-card1">
          categories <span>{categorieslist?.length}</span>
        </div>
        <div className="dashboard-card dashboard-card1">
          product <span>{product_list?.length}</span>
        </div>
        <div className="dashboard-card dashboard-card1">
          warehouse <span>{warehouse_list?.length}</span>
        </div>
        <div className="dashboard-card dashboard-card1">
          supplier <span>{supplier_list?.length}</span>
        </div>
        <div className="dashboard-card dashboard-card1">
          customer <span>{customer_list?.length}</span>
        </div>
      </div>

      {/* Orders charts */}
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h2 className="card-title">Purchasing Order</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={purchasing_order}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} tickInterval={1} />
                <Legend />
                <Bar dataKey="count" fill="#60a5fa" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">Sales Order</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sales_order}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} tickInterval={1} />
                <Legend />
                <Bar dataKey="count" fill="#34d399" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stock chart */}
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h2 className="card-title">Stock In by Month</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockinData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Legend  formatter={(value) => <span style={{ fontSize: '13px' }}>{value}</span>}/>
                {productsin.map((product, index) => {
                  
                  const color = `hsl(${(index * 60) % 360}, 70%, 50%)`;
                  return (
                    <Bar
                      key={product}
                      dataKey={product}
                      fill={color}
                      radius={[0, 0, 0, 0]}
                      
                    />
                  );
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="card-title">Stock out by Month</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Legend  formatter={(value) => <span style={{ fontSize: '13px' }}>{value}</span>}/>
                {productsout.map((product, index) => {
                  
                  const color = `hsl(${(index * 60) % 360}, 70%, 50%)`;
                  return (
                    <Bar
                      key={product}
                      dataKey={product}
                      fill={color}
                      radius={[0, 0, 0, 0]}
                      
                    />
                  );
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
