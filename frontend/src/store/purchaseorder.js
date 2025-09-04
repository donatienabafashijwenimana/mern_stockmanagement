import { create } from "zustand"

const { axiosinstance } = require("./axiosinstance")

export const order_purchasestore =create((set,get)=>({
    p_order_list :[],
    set_p_orderlist:async()=>{
        try {
            const res = await axiosinstance.get('/porder/readporder');

            if (!res.data || !res.data.result) {
                console.log("No orders found");
                set({ p_order_list: [] });
                return;
            }

            set({ p_order_list: res.data.result });
        } catch (err) {
            console.error("Failed to fetch purchase orders:", err);
        }
    },
    add_p_order: async(product,quantity,supplier,warehouse,o_date,expected_date)=>{
        const res = await axiosinstance.post('/porder/addporder',
            {product,quantity,supplier,warehouse,o_date,expected_date})
        if(res) return alert('data well inserted')
        else return alert('error accured')
    },
    update_p_order: async(product,quantity,supplier,warehouse,o_date,expected_date,id)=>{
        const res = await axiosinstance.put(`/porder/updateporder/${id}`,
            {product,quantity,supplier,warehouse,o_date,expected_date})
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    },
    delete_p_order: async(id)=>{
        const res = await axiosinstance.delete(`/porder/deleteporder/${id}`)
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    }
}))